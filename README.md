# slds-test

This repository contains a minimal Salesforce DX project with a simple Lightning Web Component. The component demonstrates basic SLDS styling and can also be built into a static site for GitHub Pages.

## Getting Started

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

### Project Structure

- `sfdx-project.json` – SFDX project configuration.
- `force-app/main/default/lwc/helloWorld` – Simple **Hello World** Lightning Web Component.

### GitHub Pages Deployment

The repository also includes a lightweight LWC Open Source app in the `src` folder. Use the commands below to build it to the `docs/` directory so it can be hosted using GitHub Pages:

```bash
npm install
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

Commit and push the generated `docs/` folder, then enable GitHub Pages for your repository and point it at that directory.
