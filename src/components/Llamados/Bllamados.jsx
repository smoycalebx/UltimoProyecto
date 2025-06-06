async function getProductos() {
    try {
        const response = await fetch('http://localhost:3000/producto', {
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
async function postProductos(producto,cantidad,precio,imagen) {
    try {
        const userData = {
            producto,
            cantidad,
            precio,
            imagen
        };
        const response = await fetch("http://localhost:3000/producto", {
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
async function updateUsers(producto,cantidad,precio,id)
{
    try {
        const userData = {
            producto,
            cantidad,
            precio
            
        };
        const response = await fetch(`http://localhost:3000/producto/${id}`, {
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
async function deleteProductos(id) {
    try {
        const response = await fetch(`http://localhost:3000/producto/${id}`, {
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
export default { getProductos, postProductos, updateUsers, deleteProductos };