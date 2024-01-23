// User
export const login = async (username, password) => {
  return fetch('/api/user', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json());
};

export const signup = async (username, email, password) => {
  return fetch('/api/user?action=register', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, email: email, password: password })
  }).then(res => res.json());
};

export const updateUser = async (id, username, email, password) => {
  return fetch(`/api/user/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'put',
    body: JSON.stringify({ username: username, email: email, password: password })
  }).then(res => res.json());
}

export const deleteOneUser = () => {

}

// Recipe
export const fetchRecipeLength = async () => {
  return fetch(`/api/recipe/length`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'get'
  }).then(res => res.json());
};

export const fetchRecipeById = async (recipeId) => {
  return fetch(`/api/recipe/${recipeId}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'get'
  }).then(res => res.json());
};

export const createRecipe = async (recipeData) => {
  return fetch('/api/recipe', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(recipeData)
  }).then(res => res.json());
};

export const updateRecipe = async (recipeId, recipeData) => {
  return fetch(`/api/recipe/${recipeId}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'put',
    body: JSON.stringify(recipeData)
  }).then(res => res.json());
};

export const deleteRecipe = async (recipeId) => {
  return fetch(`/api/recipe/${recipeId}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'delete'
  }).then(res => res.json());
};

// Favorite
export const addFavorite = async (userId, recipeId) => {
  return fetch(`/api/favourites/${userId}/${recipeId}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'put',
  }).then(res => res.json());
};

export const removeFavorite = async (userId, recipeId) => {
  return fetch(`/api/favourites/${userId}/${recipeId}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'delete',
  }).then(res => res.json());
};