class SuperMath {

  input() {
    const X = +prompt('Enter X:');
    const Y = +prompt('Enter Y:');
    const znak = prompt('Enter operation: (+ - / * %):');

    if (X === null || Y === null || znak === null) {
      return alert('operation cancelled')
    } else {
      this.check({ X, Y, znak });
    }
  }

  check(obj) {
    const confirmation = confirm(`Confirm operation ${obj.znak} with arguments: ${obj.X}, and ${obj.Y}`);
    if (!confirmation) {
      return this.input();
    } else {
      return this.operation(obj.X, obj.Y, obj.znak);
    }
  }

  isValidZnak(znak) {
    const validZnak = ['+', '-', '/', '*', '%'];
    return validZnak.includes(znak);
  }

  operation(X, Y, znak) {
    switch (znak) {
      case '+':
        return alert(X + Y);
      case '-':
        return alert(X - Y);
      case '/':
        return alert(X / Y);
      case '*':
        return alert(X * Y);
      case '%':
        return alert(X % Y);
    }
  }

}

const superMath = new SuperMath();
superMath.input();