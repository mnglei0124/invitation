import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_5v4wdx7";
const EMAILJS_TEMPLATE_ID = "template_giqdthi";
const EMAILJS_PUBLIC_KEY = "_jmd91fa_KKnZVItS";

export const getDeviceInfo = () => {
  const userAgent = navigator.userAgent;
  const platform = navigator.platform;
  const deviceInfo = {
    isMobile: /iPhone|iPad|iPod|Android/i.test(userAgent),
    platform: platform,
    browser: navigator.vendor || "unknown",
    userAgent: userAgent,
  };
  return deviceInfo;
};

export const sendResponseEmail = async (response: boolean) => {
  try {
    const deviceInfo = getDeviceInfo();
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        response: response ? "Yes" : "No",
        time: new Date().toLocaleString(),
        device: `Platform: ${deviceInfo.platform}, Mobile: ${deviceInfo.isMobile}, Browser: ${deviceInfo.browser}`,
      },
      EMAILJS_PUBLIC_KEY
    );
    return result;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};
