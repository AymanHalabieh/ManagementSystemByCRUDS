var Title = document.getElementById("Title");
var Price = document.getElementById("Price");
var Taxes = document.getElementById("Taxes");
var Ads = document.getElementById("Ads");
var Discount = document.getElementById("Discount");
var Count = document.getElementById("Count");
var Category = document.getElementById("Category");
var Totalspan = document.getElementById("Total");
/////////////////
var SearchTitleInput = document.getElementById("SearchTitleInput");
var SearchCategoryInput = document.getElementById("SearchCategoryInput");
/////////////////
var CreateBtn = document.getElementById("Create");
var UpdateBtn = document.getElementById("Update");
var SearchTitleBtn = document.getElementById("SearchTitleBtn");
var SearchCategoryBtn = document.getElementById("SearchCategoryBtn");
var DeleteAllBtn = document.getElementById("DeleteAllBtn");
var DeleteAllBtnText = document.getElementById("DeleteAllBtn");

var Data = [];
var ID = localStorage.length / 7;
var Total;
/////////////////////
var TableBody = document.getElementById("TableBody");
Clear = () => {
  Title.value = "";
  Price.value = "";
  Taxes.value = "";
  Ads.value = "";
  Discount.value = "";
  Count.value = "";
  Category.value = "";
  Totalspan.innerHTML = "Total : 0";
};

Add = () => {
  if (
    Title.value != "" &&
    Price.value != "" &&
    Taxes.value != "" &&
    Ads.value != "" &&
    Discount.value != "" &&
    Category.value != ""
  ) {
    let count = document.getElementById("Count").value;
    let Total = +Price.value + +Taxes.value + +Ads.value - Discount.value;
    for (let i = 0; i < count; i++) {
      ID++;
      var Bill = {
        Title: Title.value,
        Price: Price.value,
        Taxes: Taxes.value,
        Ads: Ads.value,
        Discount: Discount.value,
        Total: Total,
        Category: Category.value,
      };
      Data.push(Bill);
    }

    Clear();
    Show();
  } else {
    alert("Please Fill The Data");
  }
};

Show = () => {
  UpdateLocalStorge();
  TableBody.innerHTML = "";
  let ID = 1;
  for (let i = 0; i < Data.length; i++) {
    TableBody.innerHTML += `<div id="Body">
				<span>${ID}</span>
				<span>${Data[i].Title}</span>
				<span>${Data[i].Price}</span>
				<span>${Data[i].Taxes}</span>
				<span>${Data[i].Ads}</span>
				<span>${Data[i].Discount}</span>
				<span>${Data[i].Total}</span>
				<span>${Data[i].Category}</span>
				<button onclick="Update(${i})">Update</button>
				<button onclick="Delete(${i})">Delete</button>
			</div>
      
     `;
    ID++;
  }
  DeleteAllBtnText.innerHTML = `Delete All(${ID - 1})`;
};

CreateBtn.onclick = () => {
  Add();
};

var id;
Update = (index) => {
  console.log(Data);
  id = index;
  Title.value = Data[index].Title;
  Price.value = Data[index].Price;
  Taxes.value = Data[index].Taxes;
  Ads.value = Data[index].Ads;
  Totalspan.innerHTML = `Total : ${Data[index].Total}`;
  Category.value = Data[index].Category;
  CreateBtn.style = "display:none;";
  UpdateBtn.style = "display:inline-block;";
};

Delete = (index) => {
  Data.splice(index, 1);
  Show();
};
UpdateBtn.onclick = () => {
  Data[id].Title = Title.value;
  Data[id].Price = Price.value;
  Data[id].Taxes = Taxes.value;
  Data[id].Ads = Ads.value;
  Data[id].Discount = Discount.value;
  Data[id].Total = +Price.value + +Taxes.value + +Ads.value - +Discount.value;
  Data[id].Category = Category.value;
  CreateBtn.style = "display:inline-block;";
  UpdateBtn.style = "display:none;";
  Show();
  Clear();
};

Price.onkeyup = () => {
  let Total = +Price.value + +Taxes.value + +Ads.value - +Discount.value;
  Totalspan.innerHTML = `Total : ${Total}`;
};
Taxes.onkeyup = () => {
  let Total = +Price.value + +Taxes.value + +Ads.value - +Discount.value;
  Totalspan.innerHTML = `Total : ${Total}`;
};
Ads.onkeyup = () => {
  let Total = +Price.value + +Taxes.value + +Ads.value - +Discount.value;
  Totalspan.innerHTML = `Total : ${Total}`;
};
Discount.onkeyup = () => {
  let Total = +Price.value + +Taxes.value + +Ads.value - +Discount.value;
  Totalspan.innerHTML = `Total : ${Total}`;
};

SearchTitleInput.onkeyup = () => {
  SearchTitleInput = document.getElementById("SearchTitleInput").value;
  TableBody.innerHTML = "";
  let ID = 1;
  for (let i = 0; i < Data.length; i++) {
    let title1 = Data[i].Title.toUpperCase();
    if (title1.search(SearchTitleInput.toUpperCase()) != -1) {
      TableBody.innerHTML += `<div id="Body">
				<span>${ID}</span>
				<span>${Data[i].Title}</span>
				<span>${Data[i].Price}</span>
				<span>${Data[i].Taxes}</span>
				<span>${Data[i].Ads}</span>
				<span>${Data[i].Discount}</span>
				<span>${Data[i].Total}</span>
				<span>${Data[i].Category}</span>
				<button onclick="Update(${i})">Update</button>
				<button onclick="Delete(${i})">Delete</button>
			</div>
     `;
      ID++;
    }
  }
};

SearchCategoryInput.onkeyup = () => {
  SearchCategoryInput = document.getElementById("SearchCategoryInput").value;
  TableBody.innerHTML = "";
  let ID = 1;
  for (let i = 0; i < Data.length; i++) {
    let Category1 = Data[i].Category.toUpperCase();
    if (Category1.search(SearchCategoryInput.toUpperCase()) != -1) {
      TableBody.innerHTML += `<div id="Body">
				<span>${ID}</span>
				<span>${Data[i].Title}</span>
				<span>${Data[i].Price}</span>
				<span>${Data[i].Taxes}</span>
				<span>${Data[i].Ads}</span>
				<span>${Data[i].Discount}</span>
				<span>${Data[i].Total}</span>
				<span>${Data[i].Category}</span>
				<button onclick="Update(${i})">Update</button>
				<button onclick="Delete(${i})">Delete</button>
			</div>
     `;
      ID++;
    }
  }
};

SearchCategoryBtn.onclick = () => {
  let SearchCategoryInput = document.getElementById("SearchCategoryInput");
  let SearchTitleInput = document.getElementById("SearchTitleInput");
  SearchTitleInput.value = "";
  SearchCategoryInput.style = "display: inline-block;";
  SearchTitleInput.style = "display: none;";
};
SearchTitleBtn.onclick = () => {
  let SearchCategoryInput = document.getElementById("SearchCategoryInput");
  let SearchTitleInput = document.getElementById("SearchTitleInput");
  SearchCategoryInput.value = "";
  SearchCategoryInput.style = "display: none;";
  SearchTitleInput.style = "  display: inline-block;";
};

function onstart1() {
  var len = localStorage.length;
  DeleteAllBtnText.innerHTML = `Delete All(${len / 7})`;
  console.log(len);
  for (let i = 0; i < len / 7; i++) {
    let Bill = {
      Title: localStorage.getItem("Title" + i),
      Price: localStorage.getItem("Price" + i),
      Taxes: localStorage.getItem("Taxes" + i),
      Ads: localStorage.getItem("Ads" + i),
      Discount: localStorage.getItem("Discount" + i),
      Total: localStorage.getItem("Total" + i),
      Category: localStorage.getItem("Category" + i),
    };
    Data.push(Bill);
  }
  console.log(Data);

  Show();
}

onstart1();

function UpdateLocalStorge() {
  localStorage.clear();
  for (let i = 0; i < Data.length; i++) {
    localStorage.setItem(`Title${i}`, Data[i].Title);
    localStorage.setItem(`Price${i}`, Data[i].Price);
    localStorage.setItem(`Taxes${i}`, Data[i].Taxes);
    localStorage.setItem(`Ads${i}`, Data[i].Ads);
    localStorage.setItem(`Discount${i}`, Data[i].Discount);
    localStorage.setItem(`Total${i}`, Data[i].Total);
    localStorage.setItem(`Category${i}`, Data[i].Category);
  }
}
DeleteAllBtn.onclick = () => {
  localStorage.clear();
  Data = [];
  Show();
};
