import { BaseComp } from "./base-comp.js";
import { BlogEntry } from "./blog-entry.js";

class BlogList extends BaseComp {
  constructor() {
    super();
  }

  connectedCallback() {
    this.fetchTheTemplate("blog-list.html")
      .then((hasFetched) => {
        const elemNewBlogEntry = BlogEntry.newBlogEntryElement("New Title", "New Author", "New Date", "New Content");

        this.append(elemNewBlogEntry);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

customElements.define("blog-list", BlogList);

export { BlogList };
