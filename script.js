const categories = {
    "Electronics": {
        "Laptops": ["Gaming Laptops", "Ultrabooks", "2-in-1 Laptops"],
        "Mobile Phones": ["Smartphones", "Feature Phones"],
        "Tablets": ["Android Tablets", "iPads"]
    },
    "Home Appliances": {
        "Vacuum Cleaners": ["Robot Vacuums", "Stick Vacuums", "Canister Vacuums"],
        "Refrigerators": ["Single Door", "Double Door", "Side-by-Side"],
        "Air Conditioners": ["Window AC", "Split AC", "Portable AC"]
    },
    "Fashion": {
        "Women's Clothing": ["Dresses", "Tops", "Bras", "Corsets", "Pants"],
        "Men's Clothing": ["Shirts", "Trousers", "Jackets"],
        "Accessories": ["Bags", "Shoes", "Jewelry"]
    }
};

// Populate Categories
const categoryDropdown = document.getElementById("category");
const subcategoryDropdown = document.getElementById("subcategory");
const subsubcategoryDropdown = document.getElementById("subsubcategory");

function populateDropdown(dropdown, options) {
    dropdown.innerHTML = '<option value="" disabled selected>Select an option</option>';
    options.forEach(option => {
        dropdown.innerHTML += `<option value="${option}">${option}</option>`;
    });
}

populateDropdown(categoryDropdown, Object.keys(categories));

// Handle Category Selection
categoryDropdown.addEventListener("change", function () {
    const selectedCategory = this.value;
    if (categories[selectedCategory]) {
        populateDropdown(subcategoryDropdown, Object.keys(categories[selectedCategory]));
        subsubcategoryDropdown.innerHTML = '<option value="" disabled selected>Select a sub-subcategory</option>'; // Reset sub-subcategory
    }
});

// Handle Subcategory Selection
subcategoryDropdown.addEventListener("change", function () {
    const selectedCategory = categoryDropdown.value;
    const selectedSubcategory = this.value;
    if (categories[selectedCategory][selectedSubcategory]) {
        populateDropdown(subsubcategoryDropdown, categories[selectedCategory][selectedSubcategory]);
    }
});

// Calculate Total
document.getElementById("shopping-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const quantity = parseInt(document.getElementById("quantity").value);
    const price = parseFloat(document.getElementById("price").value);

    if (!isNaN(quantity) && !isNaN(price)) {
        const total = quantity * price;
        document.getElementById("result").innerText = `Total Cost: $${total.toFixed(2)}`;
    } else {
        document.getElementById("result").innerText = "Please enter valid quantity and price.";
    }
});
