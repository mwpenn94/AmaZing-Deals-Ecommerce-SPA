class Department {
    constructor(id, name, categories) {
      this.id = id;
      this.name = name;
      this.categories = categories;
    }
}

let renderDepartmentPage = () => {
  categoryNameh1.innerText = ''
  mainBody.className = ''

  fetch(`http://localhost:3000/departments/index`)
      .then(res => res.json())
      console.log(res.json())
}
