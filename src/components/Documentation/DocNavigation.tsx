"use client"

import { useEffect, useState } from "react"

import Link from "next/link"

export const DocNavigation = () => {

    const [navItem, setNavItem] = useState("version");

    function getNavItem(item:string){
        setNavItem(item)
    }

    const DocsNav = [
      {
        id: 1,
        navItem: "Основные документы",
        hash: "acts",
      },
    ];

    return (
        <div className="flex flex-col gap-0.5 mt-4 items-start fixed pe-4" >
          {
            DocsNav.map((item) => {
                return (
                    <Link key={item.id} href={`#${item.hash}`} onClick={() => getNavItem(item.hash)} className={`py-2.5 hover:bg-primary/20 hover:text-primary dark:hover:text-primary xl:min-w-60 lg:min-w-52 min-w-full px-4 rounded-md text-midnight_text text-base font-medium  ${item.hash === navItem ? "bg-primary text-white hover:!bg-primary hover:!text-white dark:!text-opacity-100 dark:hover:text-white" : "text-MidnightNavyText dark:text-SlateBlueText dark:text-opacity-80"}`}>{item.navItem}</Link>
                )
            })
          }
        </div>
    )
}