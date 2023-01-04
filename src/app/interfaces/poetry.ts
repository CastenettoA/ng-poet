// define the data model reflected in the form
class Poetry {
    constructor(
      public _id: string|undefined,
      public title: string,
      public author: string,
      public content: string
    ) { }
  }

  export {Poetry};