export const GET_CLEANUPS_START = 'GET_CLEANUPS_START';
export const GET_CLEANUPS_ERROR = 'GET_CLEANUPS_ERROR';
export const GET_CLEANUPS_SUCCESS = 'GET_CLEANUPS_SUCCESS';

export const GET_TOOLS_START = 'GET_TOOLS_START';
export const GET_TOOLS_ERROR = 'GET_TOOLS_ERROR';
export const GET_TOOLS_SUCCESS = 'GET_TOOLS_SUCCESS';

export const GET_TOOL_CATEGORIES_START = 'GET_TOOL_CATEGORIES_START';
export const GET_TOOL_CATEGORIES_ERROR = 'GET_TOOL_CATEGORIES_ERROR';
export const GET_TOOL_CATEGORIES_SUCCESS = 'GET_TOOL_CATEGORIES_SUCCESS';


export function getCleanups() {
  return {
    type: GET_CLEANUPS_START,
  };
}

export function getTools() {
  return {
    type: GET_TOOLS_START,
  };
}

export function getToolCategories() {
  return {
    type: GET_TOOL_CATEGORIES_START,
  };
}
