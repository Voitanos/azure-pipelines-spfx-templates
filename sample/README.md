# SharePoint Framework + Azure DevOps CI/CD

[![Build Status](https://dev.azure.com/aconn/azure-pipelines-spfx-templates-test/_apis/build/status/Voitanos.azure-pipelines-spfx-templates-test?branchName=master)](https://dev.azure.com/aconn/azure-pipelines-spfx-templates-test/_build/latest?definitionId=15&branchName=master)

This project is configured with Azure DevOps Pipelines to build, test and deploy to three environments:

- **dev**: automatically deploy on push to any branch

## Variable Group

The following settings are expected to be found within a variable group in Azure DevOps named **environment-settings**:

- **AdminUserLogin**: Office 365 user with app upload & deploy rights on the target environments
- **AdminUserPassword**: Office 365 user's password (*mark as a secret*)

## Setting up target environments

Use the following script to assist in creating the three target sites

```shell
# the following works on MacOS / Linux
export SITE_ALIAS=SPFx-DevOps-DevEnv
export SITE_TITLE="SPFx DevOps Demo - Development Environment"
o365 spo site add --type TeamSite --url https://<TENANT>.sharepoint.com/sites/$SITE_ALIAS --title $SITE_TITLE --alias $SITE_ALIAS
o365 spo site appcatalog add --url https://<TENANT>.sharepoint.com/sites/$SITE_ALIAS
```

- SPFx DevOps Demo - Dev Environment         https://<TENANT>.sharepoint.com/sites/SPFx-DevOps-DevEnv