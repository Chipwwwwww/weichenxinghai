import { Fragment } from "react";
import { siteConfig } from "@/data/siteConfig";

export default function SupportEmailInline() {
  return (
    <span>
      {siteConfig.contact.emails.map((email, index) => (
        <Fragment key={email}>
          <a href={`mailto:${email}`} className="tap-target font-medium text-brand-teal hover:text-[#1f5a54]">
            {email}
          </a>
          {index < siteConfig.contact.emails.length - 1 ? " / " : ""}
        </Fragment>
      ))}
    </span>
  );
}
