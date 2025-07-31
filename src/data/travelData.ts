export interface Place {
  name: string;
  description: string;
}

export const travelData: Record<string, Place[]> = {
  Delhi: [
    { name: 'Red Fort', description: 'Historic fort in Delhi built in red sandstone.' },
    { name: 'India Gate', description: 'War memorial and popular tourist site.' },
  ],
  Mumbai: [
    { name: 'Gateway of India', description: 'Iconic monument by the Arabian Sea.' },
    { name: 'Marine Drive', description: 'A scenic coastal walkway perfect for sunsets.' },
  ],
  Jaipur: [
    { name: 'Amber Fort', description: 'A majestic fort with elephant rides and views.' },
    { name: 'Hawa Mahal', description: 'The palace with an intricate honeycomb facade.' },
  ],
  Bangalore: [
    { name: 'Bangalore Palace', description: 'Tudor-style royal palace with vintage charm.' },
    { name: 'Cubbon Park', description: 'Lush green park ideal for nature walks and picnics.' },
    { name: 'Wonderla', description: 'Thrilling amusement park with rides and water attractions.' },
    { name: 'ISKCON Temple', description: 'Spiritual temple known for its peaceful ambiance and cultural programs.' },
    { name: 'Visvesvaraya Museum', description: 'Interactive science and technology exhibits.' },
  ],
  Mangalore: [
    { name: 'Tannirbavi Beach', description: 'Tranquil beach perfect for sunset views.' },
    { name: 'St. Aloysius Chapel', description: 'Historic chapel adorned with beautiful frescoes.' },
    { name: 'Pilikula Nisargadhama', description: 'Eco-education park with a zoo and science center.' },
    { name: 'Sultan Battery', description: 'Watchtower built by Tipu Sultan overlooking the coast.' },
    { name: 'Surathkal Beach', description: 'Secluded beach ideal for quiet walks and relaxation.' },
  ],
  'NITK Surathkal': [
    { name: 'Main Building & Campus Viewpoint', description: 'Iconic structure and scenic viewpoint overlooking the sea.' },
    { name: 'NITK Beach', description: 'Private beach accessible from campus with stunning views.' },
    { name: 'Jogging Track Hill', description: 'Peaceful elevated path for walks and sunrise views.' },
  ],
};
