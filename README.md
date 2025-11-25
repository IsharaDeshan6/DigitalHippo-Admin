# DigitalHippo-Admin 🦛

[![HTML](https://img.shields.io/badge/Main_Language-HTML-orange.svg)]()
[![Angular](https://img.shields.io/badge/Framework-Angular-red.svg)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Open Issues](https://img.shields.io/github/issues/IsharaDeshan6/DigitalHippo-Admin)]()
[![Open Pull Requests](https://img.shields.io/github/issues-pr/IsharaDeshan6/DigitalHippo-Admin)]()

## Description 📝

The DigitalHippo-Admin project is an administrative dashboard built using Angular, TypeScript, and Tailwind CSS. It provides a user interface for managing customers, products, and orders. The application uses Angular's server-side rendering (SSR) capabilities to improve initial load times and SEO. It also leverages Angular Material components for a rich and consistent user experience.

## Table of Contents 📚

- [Description](#description-)
- [Features](#features-)
- [Tech Stack](#tech-stack-)
- [Installation](#installation-)
- [Usage](#usage-)
- [Project Structure](#project-structure-)
- [Contributing](#contributing-)
- [License](#license-)
- [Important Links](#important-links-)
- [Footer](#footer-)

## Features ✨

- **Dashboard:** Provides an overview of key metrics. 📊
- **Customer Management:** Allows viewing and managing customer details, including active status. 🧑‍🤝‍🧑
- **Product Management:** Enables creating, updating, and deleting products, as well as managing product images. 📦
- **Order Management:** Facilitates viewing and managing orders. 🛒
- **Login Page:** Secure login page for administrators. 🔑
- **Server-Side Rendering (SSR):** Improves initial load time and SEO. ⏱️
- **Search Functionality:** Implemented for Customers and Products for easy filtering. 🔍
- **Real-time currency conversion:** Displaying product prices in USD and LKR using a forex service. 💰
- **Copy to Clipboard:** Copying product IDs to clipboard with a click. 📋

## Tech Stack 💻

- **Frontend:**
    - Angular v18.1.0 🅰️
    - TypeScript v5.5.2 ⌨️
    - Tailwind CSS v3.4.14 🎨
    - Angular Material v18.2.8 💎
- **Backend:**
    - Node.js ⚙️
    - Express v4.18.2 🌐
- **Other:**
    - RxJS v7.8.0 🔄
    - Angular CLI v18.1.4 🛠️

## Installation ⚙️

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/IsharaDeshan6/DigitalHippo-Admin.git
    cd DigitalHippo-Admin
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure environment variables:**

    - Create a `.env` file (if needed) in the root directory.
    - Add any necessary environment variables, such as API keys or database connection strings.

4.  **Start the development server:**

    ```bash
    npm start
    ```

    This will start the Angular development server, and you can access the application in your browser at `http://localhost:4200/`.

5.  **Build for production:**

    ```bash
    npm run build
    ```

    This will build the application for production and place the output in the `dist/` directory.

6.  **Run the server-side rendering (SSR) server:**

    ```bash
    npm run serve:ssr:DigitalHippo-admin
    ```
    This command executes the server.mjs file which uses the express server for server side rendering.

## Usage 🚀

1.  **Access the application:**

    -   Open your web browser and navigate to `http://localhost:4200/` during development or the appropriate URL when deployed.

2.  **Login:**

    -   Use the login form on the `/login` route to access the admin dashboard. 🔑

    ```html
    <button routerLink="/dashboard" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
    ```

3.  **Navigate the dashboard:**

    -   Use the navigation links in the header to access different sections of the admin panel. 🧭

    ```html
    <button routerLink="/customers" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Customers</button>
    <button routerLink="/products" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Products</button>
    <button routerLink="/orders" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Orders</button>
    ```

4.  **Manage Products:**

    -  Click on `Products` to view, create, update and delete products.

    -  Click `+ New Product` button to create new product.

        ```html
        <button (click)="openNewProductForm();" type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">+ New Product</button>
        ```

## Project Structure 📂

```
DigitalHippo-Admin/
├── .editorconfig
├── angular.json
├── karma.conf.js
├── package.json
├── README.md
├── server.ts
├── src/
│   ├── app/
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.server.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── components/
│   │   │   ├── customers/
│   │   │   │   ├── customers.component.css
│   │   │   │   ├── customers.component.html
│   │   │   │   ├── customers.component.spec.ts
│   │   │   │   ├── customers.component.ts
│   │   │   │   ├── inner/
│   │   │   │   │   ├── customer-status-manager/
│   │   │   │   │   │   ├── customer-status-manager.component.css
│   │   │   │   │   │   ├── customer-status-manager.component.html
│   │   │   │   │   │   ├── customer-status-manager.component.spec.ts
│   │   │   │   │   │   └── customer-status-manager.component.ts
│   │   │   ├── dashboard/
│   │   │   │   ├── dashboard.component.css
│   │   │   │   ├── dashboard.component.html
│   │   │   │   ├── dashboard.component.spec.ts
│   │   │   │   └── dashboard.component.ts
│   │   │   ├── login-page/
│   │   │   │   ├── login-page.component.css
│   │   │   │   ├── login-page.component.html
│   │   │   │   ├── login-page.component.spec.ts
│   │   │   │   └── login-page.component.ts
│   │   │   ├── orders/
│   │   │   │   ├── orders.component.css
│   │   │   │   ├── orders.component.html
│   │   │   │   ├── orders.component.spec.ts
│   │   │   │   └── orders.component.ts
│   │   │   ├── products/
│   │   │   │   ├── inner-pages/
│   │   │   │   │   ├── manage-product-images/
│   │   │   │   │   │   ├── manage-product-images.component.css
│   │   │   │   │   │   ├── manage-product-images.component.html
│   │   │   │   │   │   ├── manage-product-images.component.spec.ts
│   │   │   │   │   │   └── manage-product-images.component.ts
│   │   │   │   │   ├── new-product/
│   │   │   │   │   │   ├── new-product.component.css
│   │   │   │   │   │   ├── new-product.component.html
│   │   │   │   │   │   ├── new-product.component.spec.ts
│   │   │   │   │   │   └── new-product.component.ts
│   │   │   │   │   └── update-product/
│   │   │   │   │   ├── update-product.component.css
│   │   │   │   │   ├── update-product.component.html
│   │   │   │   │   ├── update-product.component.spec.ts
│   │   │   │   │   └── update-product.component.ts
│   │   │   │   ├── products.component.css
│   │   │   │   ├── products.component.html
│   │   │   │   ├── products.component.spec.ts
│   │   │   │   └── products.component.ts
│   │   ├── interceptor/
│   │   │   ├── http-manager.interceptor.spec.ts
│   │   │   └── http-manager.interceptor.ts
│   │   ├── service/
│   │   │   ├── clipboard/
│   │   │   │   ├── clipboard.service.spec.ts
│   │   │   │   └── clipboard.service.ts
│   │   │   ├── forex/
│   │   │   │   ├── forex.service.spec.ts
│   │   │   │   └── forex.service.ts
│   │   │   └── product/
│   │   │   ├── product.service.spec.ts
│   │   │   └── product.service.ts
│   ├── environments/
│   │   ├── environment.development.ts
│   │   └── environment.ts
│   ├── index.html
│   ├── main.server.ts
│   ├── main.ts
│   ├── styles.css
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

## API Reference ℹ️

The application uses a REST API for managing products. The API endpoints are defined in the `ProductService`.

-   **Create Product:** `POST /api/v1/products`

    ```typescript
    create(obj: any): Observable<any> {
        return this.http.post(this.baseUrl + 'products', {
            qty: obj.qty,
            unitPrice: obj.unitPrice,
            description: obj.description
        });
    }
    ```

-   **Search Products:** `GET /api/v1/products/list`

    ```typescript
     search(page: any, size: any, searchText: any): Observable<any> {
        let params = new HttpParams();
        params = params.append('searchText', searchText);
        params = params.append('page', page);
        params = params.append('size', size);
        return this.http.get(this.baseUrl + 'products/list', {params: params});
    }
    ```

-   **Delete Product:** `DELETE /api/v1/products/{id}`

    ```typescript
     delete(id: any): Observable<any> {
        return this.http.delete(this.baseUrl + 'products/' + id);
    }
    ```

-   **Update Product:** `PUT /api/v1/products/{id}`

    ```typescript
    update(obj: any, id: any): Observable<any> {
        return this.http.put(this.baseUrl + 'products/' + id, {
            qty: obj.qty,
            unitPrice: obj.unitPrice,
            description: obj.description
        });
    }
    ```

-   **Upload Product Image:** `POST /api/v1/product-images/{productId}`

    ```typescript
    productImageUpload(data: FormData, productId: any): Observable<any> {
        return this.http.post(this.baseUrl + 'product-images/' + productId, data);
    }
    ```

## Contributing 🙌

We welcome contributions to the DigitalHippo-Admin project! Please follow these guidelines:

1.  Fork the repository. 🍴
2.  Create a new branch for your feature or bug fix. 🌿
3.  Make your changes and commit them with descriptive commit messages. ✍️
4.  Test your changes thoroughly. ✅
5.  Submit a pull request. 📤

## License 📜

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Important Links 🔗

-   **Repository:** [https://github.com/IsharaDeshan6/DigitalHippo-Admin](https://github.com/IsharaDeshan6/DigitalHippo-Admin)
-   **Live Demo:** (If a live demo is available, add the link here)

## Footer 👣

-   **Repository:** [DigitalHippo-Admin](https://github.com/IsharaDeshan6/DigitalHippo-Admin)
-   **Author:** Ishara Deshan
-   **Contact:** (If you wish to provide contact information, add it here)

⭐️ Like the project? Give it a star! ⭐

Fork the repository to contribute and make it better! 💱

Report issues and suggestions to help improve the project! 🐞


---
