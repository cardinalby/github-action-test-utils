export type RunnerOs = 'Linux' | 'Windows' | 'macOS';
export type RunnerArch = 'X86' | 'X64' | 'ARM' | 'ARM64';

export interface GithubServiceEnvInterface {
    [p: string]: string|undefined;
    /**
     * @description Always set to true.
     * @default: 'true'
     */
    CI?: string;

    /**
     * @description Always set to true when GitHub Actions is running the workflow. You can use
     * this variable to differentiate when tests are being run locally or by GitHub Actions.
     */
    GITHUB_ACTIONS?: string;

    /**
     * @description The GitHub workspace directory path, initially empty.
     * For example, /home/runner/work/my-repo-name/my-repo-name. The actions/checkout
     * action will check out files, by default a copy of your repository, within this directory.
     * */
    GITHUB_WORKSPACE?: string;

    /** @description The branch or tag name that triggered the workflow run.*/
    GITHUB_REF_NAME?: string;

    /** @description true if branch protections are configured for the ref that triggered the workflow run.*/
    GITHUB_REF_PROTECTED?: string;

    /** @description The type of ref that triggered the workflow run. Valid values are branch or tag.*/
    GITHUB_REF_TYPE?: string;

    /** @description Only set for pull request events. The name of the head branch.*/
    GITHUB_HEAD_REF?: string;

    /** @description Only set for pull request events. The name of the base branch.*/
    GITHUB_BASE_REF?: string;

    /** @description The name of the runner executing the job.*/
    RUNNER_NAME?: string;

    /**
     * @description The operating system of the runner executing the job. Possible values are Linux,
     * Windows, or macOS.
     */
    RUNNER_OS?: RunnerOs;

    /**
     * @description The architecture of the runner executing the job. Possible values are X86,
     * X64, ARM, or ARM64.
     */
    RUNNER_ARCH?: RunnerArch;

    /**
     * @description The path to a temporary directory on the runner. This directory is emptied
     * at the beginning and end of each job. Note that files will not be removed if the runner's user
     * account does not have permission to delete them.
     */
    RUNNER_TEMP?: string;

    /**
     * @description The path to the directory containing preinstalled tools for GitHub-hosted runners.
     * For more information, see "About GitHub-hosted runners".
     */
    RUNNER_TOOL_CACHE?: string;
}