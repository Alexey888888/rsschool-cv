# Alexey Borodako

## **Contacts**

- **Location:** Minsk, Belarus
- **Phone:** +375 29 XXX-XX-XX
- **GitHub:** Alexey888888

## **Skills**

- HTML
- CSS
- JavaScript

## Code Example

```
function sumNoDuplicates(numList) {
let arr = [];
  let sum = 0;
  for (let num in numList) {
    let current = numList[num];
    delete numList[num];
    if (!numList.includes(current) && (!arr.includes(current))) {
        sum += current;
        }
    arr.push(current);
  }
    return sum;
}

```
