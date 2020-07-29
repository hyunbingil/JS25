const n=prompt('push the number');

for(let i=1; i<=n; i=i+2){
    console.log("".repeat((n-i)/2) + "*".repeat(i))
}
