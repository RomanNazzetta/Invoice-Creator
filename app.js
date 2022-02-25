const niceInvoice = require("nice-invoice")

const invoiceDetail = {
    shipping: {
      name: "Micheal",
      address: "1234 Main Street",
      city: "Dubai",
      state: "Dubai",
      country: "UAE",
      postal_code: 94111
    },
    items: [
      {
        item: "Chair",
        description: "Wooden chair",
        quantity: 1,
        price: 50.00, 
        tax: "10%"
      },
      {
        item: "Watch",
        description: "Wall watch for office",
        quantity: 2,
        price: 30.00,
        tax: "10%"
      },
      {
        item: "Water Glass Set",
        description: "Water glass set for office",
        quantity: 1,
        price: 35.00,
        tax: ""
      }
    ],
    subtotal: 156,
    total: 156,
    order_number: 1234222,
    header:{
        company_name: "Doble Zeta Estudio",
        company_logo: "invoice-icon.jpg",
        company_address: "Larra. 2713 Cordoba, Argentina"
    },
    footer:{
      text: "Estudio de Diseño"
    },
    currency_symbol:"$", 
    date: {
      billing_date: "08 August 2020",
      due_date: "10 September 2020",
    }
};

niceInvoice(invoiceDetail, 'Invoice.pdf')