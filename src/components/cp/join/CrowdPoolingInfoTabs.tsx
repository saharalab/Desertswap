import { Tab } from "@headlessui/react";
import { useState } from "react";

interface TCategories {
  Favorites: {
    id: number;
    title: string;
    date: string;
    commentCount: number;
    shareCount: number;
  }[];
  Participated: {
    id: number;
    title: string;
    date: string;
    commentCount: number;
    shareCount: number;
  }[];
  "Created By Me": {
    id: number;
    title: string;
    date: string;
    commentCount: number;
    shareCount: number;
  }[];
}

export function CrowdPoolingInfoTabs() {
  let [categories] = useState<TCategories>({
    Favorites: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Participated: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    "Created By Me": [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  let [errorMessageByCategories] = useState<any>({
    Favorites: "You don't have any favorite Crowdpooling campaigns.",
    Participated: "You haven't participated in any Crowdpooling campaigns.",
    "Created By Me": "You haven't created any Crowdpooling.",
  });

  function getErrorMessageByCategory({
    idx,
  }: {
    idx: number;
  }) {
    let currentCategory: any = Object.keys(categories)[idx];
    let errorMessage: any = errorMessageByCategories[currentCategory];
    return errorMessage;
  }

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0 text-left">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-full bg-black p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-full py-2.5 text-[0.6em] md:text-xs leading-5 font-bold text-white",
                  "ring-supernova ring-offset-2 ring-offset-black focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white/[0.09] shadow "
                    : "hover:bg-white/[0.12] hover:text-white text-white  "
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-supernova focus:outline-none focus:ring-2"
              )}
            >
              <div className="py-10 text-xs md:text-sm text-center">
                {getErrorMessageByCategory({ idx })}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
