import { BaseComp } from "./base-comp.js";

class BlogEntry extends BaseComp {
  constructor() {
    super();
  }

  get title() {
    return this.getSlotTextContent("title");
  }
  set title(value) {
    this.setSlotTextContent("title", value);
  }

  get author() {
    return this.getSlotTextContent("author");
  }
  set author(value) {
    this.setSlotTextContent("author", value);
  }

  get date() {
    return this.getSlotTextContent("date");
  }
  set date(value) {
    this.setSlotTextContent("date", value);
  }

  get content() {
    return this.getSlotTextContent("content");
  }
  set content(value) {
    this.setSlotTextContent("content", value);
  }

  static newBlogEntryElement(title, author, date, content) {
    const elemBlogEntry = document.createElement("blog-entry");

    const elemSlottedTitle = document.createElement("span");
    elemSlottedTitle.setAttribute("slot", "title");
    elemSlottedTitle.textContent = title;
    elemBlogEntry.append(elemSlottedTitle);

    const elemSlottedAuthor = document.createElement("span");
    elemSlottedAuthor.setAttribute("slot", "author");
    elemSlottedAuthor.textContent = author;
    elemBlogEntry.append(elemSlottedAuthor);

    const elemSlottedDate = document.createElement("span");
    elemSlottedDate.setAttribute("slot", "date");
    elemSlottedDate.textContent = date;
    elemBlogEntry.append(elemSlottedDate);

    const elemSlottedContent = document.createElement("span");
    elemSlottedContent.setAttribute("slot", "content");
    elemSlottedContent.textContent = content;
    elemBlogEntry.append(elemSlottedContent);

    return elemBlogEntry;
  }

  connectedCallback() {
    this.fetchTheTemplate("blog-entry.html")
      .then((hasFetched) => {
        // console.log(this.shadow.host);
        // console.log(this);
        // ***
        // const entry = this.cloneNode(true);
        // const list = this.parentElement;
        // list.append(entry);
        // ***
        // const entry = document.createElement("blog-entry");
        // console.log(entry);

        // console.log(this.parentElement.shadow);
        // console.log(this.parentElement.shadow.slotAssignment);
        // console.log(this.shadow);
        // console.log(this.shadow.slotAssignment);

        // console.log(hasFetched);
        // console.log((this.title.assignedElements()[0].textContent = "Blah Blah Blah"));
        // console.log(this.title);
        // this.title = "Blah Blah Blah";
        // console.log(this.author);
        // this.author = "Blah Blah Blah";
        // console.log(this.date);
        // this.date = "Blah Blah Blah";
        // console.log(this.content);
        // this.content = "Blah Blah Blah";

        const slotTitleShadow = this.shadow.querySelector('slot[name="title"]');
        // const slotTitleLight = this.querySelector('[slot="title"]');
        //slotTitleLight.textContent = "Blah Blah Blah";
        // slotTitleShadow.assign(document.createTextNode(""));
        // console.log(slotTitle.assignedSlot);

        // console.log(slotTitle.assignedNodes({ flatten: true }));
        //document.querySelector('span[slot="title"]').innerHTML = "Blah Blah Blah";

        slotTitleShadow.addEventListener("click", (ev) => {
          // console.log(ev.target);
          ev.target.innerHTML = "Blah Blah Blah";

          // const slot = ev.target;
          // console.log((slot.slot.innerHtml = "Blah Blah Blah"));
          // slot.innerHtml = "Blah Blah Blah";
        });
        // console.log(slotTitle);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

customElements.define("blog-entry", BlogEntry);

export { BlogEntry };
