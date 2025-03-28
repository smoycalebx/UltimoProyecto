async function getUsers() {
    try {
        const response = await fetch('http://localhost:3000/carrito', {
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
async function postUsers(nombre,tarjeta,fecha,cvv) {
    try {
        const userData = {
            nombre,
            tarjeta,
            fecha,
            cvv,
            rol:"clienete"
        };
        const response = await fetch("http://localhost:3000/carrito", {
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
async function updateUsers(producto,cantidad,costo,envio,id)
{
    try {
        const userData = {
            producto,
            cantidad,
            costo,
            envio
        };
        const response = await fetch(`http://localhost:3000/carrito/${id}`, {
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
        const response = await fetch(`http://localhost:3000/carrito/${id}`, {
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