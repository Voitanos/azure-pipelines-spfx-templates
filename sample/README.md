# Sample SharePoint Framework + Azure Pipelines Project

[![Build Status](https://dev.azure.com/aconn/Azure%20Pipelines%20SPFx%20Templates/_apis/build/status/Voitanos.azure-pipelines-spfx-templates?branchName=master)](https://dev.azure.com/aconn/Azure%20Pipelines%20SPFx%20Templates/_build/latest?definitionId=20&branchName=master)

This repo contains a sample SharePoint Framework (SPFx) project configured with an Azure Pipeline. It uses the templates defined in this repo for use in other repos.

> Note: If you do not have a `github` service connection in the project hosting your pipeline (or you do not have access to it), you can create one via **Project Settings**. Just make sure the name of this service connection is specified in the `endpoint` field. See [service connections](https://docs.microsoft.com/azure/devops/pipelines/library/service-endpoints?view=azure-devops&tabs=yaml) for more details.
>
> The sample project's service connection is named **voitanos-github**, as it points to this org's repo. The name is entirely up to you though.

The sample project is currently configured to deploy using the author's credentials to their site collections. If you want to test the full deployment, you will need to modify the the **azure-pipelines.xml** file, specifically the **Deploy** stage to use your Office 365's credentials & app catalogs.

However, for just a simple test, comment / delete the **Deploy** stage just to see it work.

## Variable Group

The following settings are expected to be found within a variable group in Azure DevOps named **environment-settings**:

- **AdminUserLogin**: Office 365 user with app upload & deploy rights on the target environments
- **AdminUserPassword**: Office 365 user's password (*mark as a secret*)
