const fibonacci = number => {
    const result = Array();
    let n1 = 0, n2 = 1, nextTerm;

    for (let i = 1; i <= number; i++) {
        result.push(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    console.log(result);
    return result;
}

fibonacci(7);