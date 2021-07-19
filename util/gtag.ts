export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
};

type EventType = {
  action: string;
  category: string;
  label: string;
  value?: string;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (props: EventType): void => {
  const { action, category, label, value } = props;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
