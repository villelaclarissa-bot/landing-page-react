import './Services.css'

const services = [
  {
    icon: '🌐',
    title: 'Web Design',
    description: 'Sites modernos e responsivos que encantam seus visitantes.'
  },
  {
    icon: '📱',
    title: 'Apps Mobile',
    description: 'Aplicativos nativos e híbridos para iOS e Android.'
  },
  {
    icon: '🚀',
    title: 'Marketing Digital',
    description: 'Estratégias para aumentar sua presença online.'
  }
]

function Services() {
  return (
    <section id="servicos" className="services">
      <h2>Nossos Serviços</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
