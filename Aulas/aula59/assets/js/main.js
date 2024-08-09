function Calculadora() {
    this.display = document.querySelector('.display')
    
    this.inicia = () => {
        this.capturaCliques()
        this.pressionaEnter()
    }
    
    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target
            if (el.classList.contains('btn-num')) this.addNum(el)
            if (el.classList.contains('btn-clear')) this.clear(el)
            if (el.classList.contains('btn-del')) this.delNum(el)   
            if (el.classList.contains('btn-eq')) this.realizaConta(el) 
        })
    }

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta()
                return
            }
        })
    }

    this.realizaConta = () => {
        let conta = this.display.value

        try {
            conta = eval(this.display.value)
            if(!conta) {
                alert('conta inválida')
                return
            }

            this.display.value = conta
        }catch(e) {
            alert('conta inválida')
            return
        }
    }

    this.delNum = (el) => this.display.value = this.display.value.slice(0, -1)
    this.clear = (el) => this.display.value = ''
    this.addNum = (el) => {
        this.display.value += el.innerText
        this.display.focus()
    }    
}

const calculadora = new Calculadora()
calculadora.inicia()