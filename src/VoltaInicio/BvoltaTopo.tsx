import './BvoltaTopo.css'


function BackToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={handleScrollToTop} className="back-to-top-button">
      Voltar ao Início
    </button>
  );
}

export default BackToTopButton;