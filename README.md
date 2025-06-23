# slds-test

This repository contains a minimal Salesforce DX project with a simple Lightning Web Component. The component demonstrates basic SLDS styling and can also be built into a static site for GitHub Pages.

Salesforce CLI is only required if you intend to deploy the project to a Salesforce org. Building the site for GitHub Pages can be done with just Node and `npm`.

## Deploying to a Salesforce org

1. Install the Salesforce CLI.
2. Authenticate to a Salesforce org:
   ```bash
   sfdx auth:web:login --setdefaultusername --setalias myOrg
   ```
3. Push the source to your org:
   ```bash
   sfdx force:source:push
   ```
4. Create an app page in Salesforce and add the **helloWorld** component.

## Project Structure

- `sfdx-project.json` – SFDX project configuration.
- `force-app/main/default/lwc/helloWorld` – Simple **Hello World** Lightning Web Component.


## Building for GitHub Pages

The repository also includes a lightweight LWC Open Source app in the `src` folder. The `docs/` directory for GitHub Pages is generated automatically by the
GitHub Actions workflow whenever changes are pushed to the `main` branch.
This folder is listed in `.gitignore`.

If you would like to preview the site locally, run:

```bash
npm install
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

This command creates the `docs/` folder locally, but you do **not** need to
commit it. The workflow will handle building and deploying to GitHub Pages for
you.
