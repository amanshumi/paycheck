// Function for register user
export async function registerUser(userData) {
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
      return { success: response.ok, data };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, data: error };
    }
  }
  

export async function loginUser(userData) {
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
      return { success: response.ok, data };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, data: error };
    }
}
