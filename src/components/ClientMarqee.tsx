import "@/styles/marquee.css";

export default function ClientsMarquee({ clients }) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto marquee-wrapper">
        <div className="marquee">
          {/* Duplicate the array to make the marquee seamless */}
          {[...clients, ...clients].map((client, index) => (
            <img
              key={index}
              src={client.logo}
              alt={client.name}
              className="h-16 sm:h-20 object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
