
// callback hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'lim' && password === 'lion')
            ) {
                onSuccess(id); // 조건이 맞으면 onSuccess 콜백을 불러준다
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'lim') {
                onSuccess({ name: 'lim', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passowrd');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`hello ${userWithRole.name}, ${userWithRole.role}`);
            }, error => {
                console.log(error)
            })
    },
    error => { console.log(error) });
// 보기 쥰내 복잡하고 어렵다. this is what we called callback hell
