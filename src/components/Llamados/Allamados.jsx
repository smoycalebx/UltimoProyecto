async function getUsers() {
    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Error fetching users');
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}
//////////LLAMADO POST//////////
async function postUsers(nombre,apellido,cedula,contraseña) {
    try {
        const userData = {
            nombre,
            apellido,
            cedula,
            contraseña,
            rol:"user"
        };
        const response = await fetch("http://localhost:3000/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        return await response.json();
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}
//////////////LLAMADO UPDATE/////////////
async function updateUsers(nombre,apellido,email,contraseña,id)
{
    try {
        const userData = {
            nombre,
            apellido,
            email,
            contraseña
        };
        const response = await fetch(`http://localhost:3000/register/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}
//////////////LLAMADO DELETE/////////////
async function deleteUser(id) {
    try {
        const response = await fetch(`http://localhost:3000/register/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }
        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}
export default { getUsers, postUsers, updateUsers, deleteUser };