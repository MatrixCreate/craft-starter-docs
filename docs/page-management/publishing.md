# The Publishing Workflow

Craft CMS gives you precise control over your content's visibility through a simple and powerful system based on status and dates. This ensures you can work on drafts safely and manage the exact lifecycle of every entry.

## Content Status: Enabled vs. Disabled

Every entry has a single **Status** toggle, which you can find in the right-hand sidebar of the editing screen. This is the master switch for the entry's visibility.

[Screenshot: A close-up of the right-hand sidebar in the entry editor, showing the "STATUS" section with the "Enabled" toggle switch in the on position.]

-   **Enabled**: The entry is live and visible on your website (provided its Post Date is in the past and its Expiry Date is in the future).
-   **Disabled**: The entry is a **draft**. It is not visible on the public website and can only be seen by logged-in users with the correct permissions. All new entries start as Disabled by default.

## Scheduling with Dates

Instead of a "Scheduled" status, Craft uses dates to control when an entry becomes live and when it is automatically unpublished.

[Screenshot: The sidebar fields for "Post Date" and "Expiry Date", showing the calendar and time picker icons.]

### Post Date

This is the date the entry is considered to be published. It determines the entry's position in lists sorted by date (like a blog) and controls its initial visibility.

-   **To publish immediately**: Leave the Post Date set to the current date and time.
-   **To schedule for the future**: Set the Post Date to a future date and time. The entry will remain a draft (even if Enabled) until that time is reached, at which point it will automatically go live.

### Expiry Date

This is an optional date for automatically unpublishing content. Once the Expiry Date is reached, the entry will be removed from the public website and its status will revert to Disabled.

-   **Use Case**: This is perfect for time-sensitive content like a job posting, a limited-time offer, or an event announcement that should no longer be visible after the event has passed.

## Saving Your Work

Craft provides several safe ways to save your progress.

[Screenshot: The red "Save" button in the top-right corner, with its dropdown arrow clicked to show the "Save and continue editing" option.]

-   **Save**: This is the primary save button. It saves your changes and takes you back to the main entries list.
-   **Save and continue editing**: Access this by clicking the small arrow next to the Save button. It saves your changes but keeps you on the editing screen, which is useful for saving progress without losing your place.

## Previewing Your Changes

Before you publish, you can see exactly how your page will look using the **Preview** feature.

1.  While editing, click the **Preview** button located in the header of the editor.
2.  This will open a new tab in your browser showing a live, interactive preview of the page, even if it's a draft.
3.  This preview link is shareable! You can send the URL to colleagues for feedback before the page goes live. The link is temporary and secure.

[Screenshot: The top header of the entry editor, highlighting the "Preview" button.]

---

*Mastering the Enabled status and the Post/Expiry dates gives you a safe and powerful workflow for managing your content from draft to publication and beyond.*