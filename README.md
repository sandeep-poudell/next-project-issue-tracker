- Clone the project
```
git clone <github_url>
```
- Run the React server
```
npm run dev
```
***

- Steps taken to create this project

```
npx create-next-app@latest

    Ok to proceed? (y) y
    ✔ What is your project named? … next-project
    ✔ Would you like to use TypeScript? … Yes
    ✔ Would you like to use ESLint? … Yes
    ✔ Would you like to use Tailwind CSS? … Yes
    ✔ Would you like to use `src/` directory? … No
    ✔ Would you like to use App Router? (recommended) … Yes
    ✔ Would you like to customize the default import alias (@/*)? … No


cd next-project-issue-tracker

npm install react-icons
npm install classnames

npm install prisma
npx prisma init
    
    Formating prisma schema
        npx prisma format
    Migrating 
        npx prisma migrate dev
               
```