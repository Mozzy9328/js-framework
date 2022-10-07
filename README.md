# JS Frameworks Course Assignment

This is a website showcasing the skills of JS Frameworks

## Description

This app has these following paths:

- "/"
- "/detail/:param"
- "/contact"
- "/login"
- "/admin"

The admin path won't appear in your navigation.

### Home

You will find an API that returns at least:

- an array of items
- a single item retrieved by a parameter (id, name, slug, etc)

As a result it will display least 2 properties from each result.

Each result will link to the detail page, passing a parameter in the URL.

### Detail

This page will retrieve the parameter from the URL and use it in an API call to fetch one item.

This will then display at least 3 properties from the item.

### Contact

This will hold a form with the following inputs and validation:

- First name - required, minimum 3 characters
- Last name - required, minimum 4 characters
- Email - required, must be in a valid email format
- Subject - required, this must be a select box with at least 2 options
- Message - required, minimum 10 characters.

### Login

This will hold another form with username/email and password fields.

This form will make a login request to Wordpress API with the JWT plugin installed. When the login is successful the user will be redirect to the admin route.

If the login is unsuccessful a message will display above the form.

### Admin

This page will simply display an "Admin" heading.

## Built With

You can list a the tech stack that you've used over here

- [Next.js](https://nextjs.org/)
- [Bootstrap] (https://getbootstrap.com/)

## Getting Started

1. Clone the repo:

GitHub CLI
gh repo clone Mozzy9328/js-framework

2. Install the dependencies:

```
npm install
```

### Running

To run the app, run the following commands:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Contact

[My LinkedIn page](www.linkedin.com/in/msalesforce)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
