import { useState } from 'react'
import './App.css'

const frases = [
  "A matrix está observando você ",
  "Código é poesia em lógica ",
  "Erro 404: motivação não encontrada ",
  "Deploy na sexta? Corajoso... ",
  "Funciona na minha máquina ",
  "Compilou? Então sobe ",
  "Bug ou feature? Só Deus sabe "
]

function App() {
  const [frase, setFrase] = useState("Clique no botão para gerar uma frase")
  const [dark, setDark] = useState(true)

  const gerarFrase = () => {
    const random = Math.floor(Math.random() * frases.length)
    setFrase(frases[random])
  }

  const copiar = async () => {
    await navigator.clipboard.writeText(frase)
    alert("Frase copiada! 📋")
  }

  return (
    <div style={{
      ...styles.container,
      background: dark ? "#0f172a" : "#f1f5f9",
      color: dark ? "#f8fafc" : "#0f172a"
    }}>
      <h1>💻 Dev Generator</h1>

      <div style={styles.card}>
        <p style={styles.text}>{frase}</p>

        <div style={styles.buttons}>
          <button onClick={gerarFrase} style={styles.btn}>
            Gerar
          </button>

          <button onClick={copiar} style={styles.btn}>
            Copiar
          </button>
        </div>
      </div>

      <button onClick={() => setDark(!dark)} style={styles.toggle}>
        {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      <p style={{ marginTop: 20, opacity: 0.6 }}>
        Clique e gere sabedoria dev aleatória 😎
      </p>
    </div>
  )
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial",
    transition: "all 0.3s ease"
  },
  card: {
    padding: "20px",
    borderRadius: "12px",
    background: "#1e293b",
    maxWidth: "400px",
    textAlign: "center" as const,
    margin: "20px 0"
  },
  text: {
    fontSize: "18px",
    marginBottom: "15px"
  },
  buttons: {
    display: "flex",
    gap: "10px",
    justifyContent: "center"
  },
  btn: {
    padding: "10px 15px",
    cursor: "pointer",
    border: "none",
    borderRadius: "8px",
    background: "#3b82f6",
    color: "white"
  },
  toggle: {
    marginTop: "10px",
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: "8px",
    border: "none"
  }
}

export default App