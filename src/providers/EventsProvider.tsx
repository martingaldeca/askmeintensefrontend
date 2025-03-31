'use client';
import { type PropsWithChildren, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { DataService } from '@/app/lib/client';

const getEventTypeFromElement = (element: HTMLElement | null): string | null => {
  while (element) {
    const eventType = element.getAttribute('data-event-type');
    if (eventType) return eventType;
    element = element.parentElement;
  }
  return null;
};

export const EventsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    DataService.dataEventCreate({
      event_type: 'page_change',
      extra_info: { path: pathname },
    }).catch(error => {
      console.error('Error sending page change event:', error);
    });
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const eventType = getEventTypeFromElement(target);
      if (eventType) {
        DataService.dataEventCreate({
          event_type: eventType,
          extra_info: { path: pathname },
        }).catch(error => {
          console.error('Error sending click event:', error);
        });
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [pathname]);

  return <>{children}</>;
};
