import React, { useEffect } from 'react'

export function useAddEventListener({ tag, eventName, eventListener }: {
  tag: string;
  eventName: string;
  eventListener: any;
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let selectedTag = window.document.querySelector(tag)
      selectedTag?.addEventListener(eventName, eventListener)
    }
  })
}
