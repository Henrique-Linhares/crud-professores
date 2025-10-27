function App() {

  return (
    <>
    <BrowserRouter>
      <div className="layout-container">
        <Sidebar /> 
        
        <main className="content-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lista" element={<Lista />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="*" element={<div className="page-content"><h1>404: Página não encontrada</h1></div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
