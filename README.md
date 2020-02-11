# Azure Pipeline Templates for SharePoint Framework Projects

[![Build Status](https://dev.azure.com/aconn/Azure%20Pipelines%20SPFx%20Templates/_apis/build/status/Voitanos.azure-pipelines-spfx-templates?branchName=master)](https://dev.azure.com/aconn/Azure%20Pipelines%20SPFx%20Templates/_build/latest?definitionId=20&branchName=master)

This repo contains templates for SharePoint Framework (SPFx) projects using Azure DevOps Pipelines.

## Included Templates

- **[./jobs/build.yml](#jobsyml)**: Used for building, bundling & creating the SharePoint `*.sppkg` file for your project.
- **[./jobs/test.yml](#jobstestyml)**: Used to execute your tests & publish the resulting JUnit & code coverage report.
- **[./jobs/deploy.yml](#jobsdeployyml)**: Used to upload & deploy the SharePoint package `*.sppkg` file to the specified App Catalog site (*both tenant & site collection scoped are support*).

> See the sample SPFx project [./sample](./sample) configured with an Azure DevOps Pipeline that uses these templates.

## Usage

Follow these steps to use the templates in your SPFx project Azure pipeline.

### Step 1: Import job templates into your Azure pipeline

Add a [repository resource](https://docs.microsoft.com/azure/devops/pipelines/yaml-schema?view=azure-devops&tabs=schema#resources)

```yml
# azure-pipelines.yml
resources:
  repositories:
  - repository: azure-pipelines-spfx-templates
    type: github
    name: voitanos/azure-pipelines-spfx-templates
    ref: refs/tags/v1.0.0
    endpoint: github
```

> Note: If you do not have a `github` service connection in the project hosting your pipeline (or you do not have access to it), you can create one via **Project Settings**. Just make sure the name of this service connection is specified in the `endpoint` field. See [service connections](https://docs.microsoft.com/azure/devops/pipelines/library/service-endpoints?view=azure-devops&tabs=yaml) for more details.
>
> The sample project's service connection is named **voitanos-github**, as it points to this org's repo. The name is entirely up to you though.

#### Important: Consider Referencing Specific Template Versions

It is **strongly recommended** to include the `ref` property as shown above. This points to a specific branch or tag so your pipelines are based on specific templates. To pull from a specific release, use `ref: refs/tags/v1.0.0`. To pull from a specific branch, use `ref: refs/heads/branch-name`.

To use the latest version of the templates, omit the `ref` property to always pull the `master` branch.

### Step 2: Add the job templates to your Azure pipeline

Create a stage for building the project that contains the template:

```yml
# azure-pipelines.yml
- stage: Build
  dependsOn: []
  jobs:
    - template: jobs/build.yml@azure-pipelines-spfx-templates
```

Create a stage for testing the project that contains the template:

```yml
# azure-pipelines.yml
- stage: Test
  dependsOn: []
  jobs:
    - template: jobs/test.yml@azure-pipelines-spfx-templates
```

Create a stage for deploying the project that contains the template:

```yml
# azure-pipelines.yml
- stage: Deploy
  dependsOn:
    - Build
    - Test
  jobs:
    - template: jobs/deploy.yml@azure-pipelines-spfx-templates
      parameters:
        target_environment: development
        o365_user_login: foo@contoso.onmicrosoft.com
        o365_user_password: <password>
        o365_app_catalog_site_url: https://contoso.sharepoint.com/sites/AppCatalog
        o365cli_app_catalog_scope: tenant
        o365cli_deploy_extra_arguments: '--skipFeatureDeployment'
```

## Templates

This project includes the following templates:

### jobs/build.yml

This job template does the following:

1. Install all dependencies using Yarn
1. Build the project using `gulp build`
1. Bundle the project using `gulp bundle --ship`
1. Package the solution using `gulp package-solution --ship`
1. Determine the name of the generated `*.sppkg`
1. Publish the resulting `*.sppkg` as a build artifact named **spfx-package** to the pipeline run

#### Parameters

|       Parameter       | Required? |                                                 Description                                                  |     |     |
| --------------------- | :-------: | ------------------------------------------------------------------------------------------------------------ | --- | --- |
| **job_name**          |    no     | Name of the job, A-Z, a-z, 0-9, and underscore (*Default: build_package*)                                    |     |     |
| **display_name**      |    no     | Friendly name to display in the UI (*Default: SPFx production build & packaging*)                            |     |     |
| **pool**              |    no     | Scalar property used to override the default **ubuntu-latest** VM host for the agent.                        |     |     |
| **working_directory** |    no     | Leave blank if project in root of repo; otherwise set to root relative path to project. (*Default: ''*)      |     |     |
| **package_manager**   |    no     | Which package manager to use to install dependencies: npm/yarn/pnpm. *Must be lowercase.* (*Default: 'npm'*) |     |     |
| **node_version**      |    no     | Use a specific version of Node.js. (*Default: '10.x'*)                                                       |     |     |

> NOTE: Refer to the sample project for examples of how to set the **pool** & **working_directory** properties to different values when (1) you want to use a different agent pool, such as self-hosted agents (like the sample uses) or (2) when your project resides in a subfolder.

### jobs/test.yml

This job template does the following:

1. Install all dependencies using Yarn
1. Build the project using `gulp build`

    *Required when using Jest to test rendered React components to work around an issue with the un-build `*.scss.ts` file. This build step will build that file so the Jest React component rendering tests won't fail.*

1. Execute the tests using the project's **test** command defined in the **package.json**'s `scripts` property.
1. Publish the resulting JUnit test report as a test result artifact to the pipeline run
1. Publish the resulting Cobertura code coverage report as a code coverage result artifact to the pipeline run

#### Parameters

|       Parameter       | Required? |                                                 Description                                                  |
| --------------------- | :-------: | ------------------------------------------------------------------------------------------------------------ |
| **job_name**          |    no     | Name of the job, A-Z, a-z, 0-9, and underscore (*Default: build_package*)                                    |
| **display_name**      |    no     | Friendly name to display in the UI (*Default: SPFx production build & packaging*)                            |
| **pool**              |    no     | Scalar property used to override the default **ubuntu-latest** VM host for the agent.                        |
| **working_directory** |    no     | Leave blank if project in root of repo; otherwise set to root relative path to project. (*Default: ''*)      |
| **package_manager**   |    no     | Which package manager to use to install dependencies: npm/yarn/pnpm. *Must be lowercase.* (*Default: 'npm'*) |
| **node_version**      |    no     | Use a specific version of Node.js. (*Default: '10.x'*)                                                       |     |     |

> NOTE: Refer to the sample project for examples of how to set the **pool** & **working_directory** properties to different values when (1) you want to use a different agent pool, such as self-hosted agents (like the sample uses) or (2) when your project resides in a subfolder.

### jobs/deploy.yml

This job template does the following:

1. Install Office 365 CLI
1. Login to Office 365 CLI
1. Download previously built SharePoint package
1. Determine the name of the generated `*.sppkg`
1. Upload `*.sppkg` to specified SharePoint App Catalog
1. Deploy `*.sppkg` in the specified SharePoint App Catalog

#### Parameters

|             Parameter              | Required? |                                     Description                                      |     |     |
| ---------------------------------- | :-------: | ------------------------------------------------------------------------------------ | --- | --- |
| **job_name**                       |    no     | Name of the job, A-Z, a-z, 0-9, and underscore (*Default: build_package*)            |     |     |
| **display_name**                   |    no     | Friendly name to display in the UI (*Default: SPFx production build & packaging*)    |     |     |
| **pool**                           |    no     | Scalar property used to override the default **ubuntu-latest** VM host for the agent |     |     |
| **o365cli_deploy_extra_arguments** |    no     | Additional arguments to add to the deploy command                                    |     |     |
| **target_environment**             |    yes    | Name of the environment to submit to                                                 |     |     |
| **o365_user_login**                |    yes    | Credentials to use to upload & deploy to App Catalog                                 |     |     |
| **o365_user_password**             |    yes    | Credentials to use to upload & deploy to App Catalog                                 |     |     |
| **o365_app_catalog_site_url**      |    yes    | URL of the App Catalog site to deploy to                                             |     |     |
| **o365cli_app_catalog_scope**      |    yes    | App Catalog scope (`tenant` \ `sitecollection`)                                      |     |     |
| **node_version**                   |    no     | Use a specific version of Node.js. (*Default: '10.x'*)                               |     |     |

> NOTE: Refer to the sample project for examples of how to set the **pool** property to different values when you want to use a different agent pool, such as self-hosted agents (like the sample uses).

### Limitations

1. The templates use the Microsoft hosted Linux agent Ubuntu.
