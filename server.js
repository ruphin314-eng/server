import cors from "cors";
import express from "express";

// backend/serveur1.js

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const { message } = req.body;
  const msg = message?.toLowerCase() || "";

  let reply = "Désolé, je n'ai pas compris votre question. Pouvez-vous reformuler ?";

  // 🔹 Salutations
  if (msg.includes("bonjour") || msg.includes("salut")) {
    reply = "Bonjour ! Bienvenue sur Les Joyaux du Temps ! Comment puis-je vous aider aujourd'hui ?";
  }

  // 🔹 Produits
  else if (msg.includes("prix") || msg.includes("coût")) {
    reply = "Nos prix dépendent du produit choisi. Vous pouvez consulter la page des produits pour plus de détails.";
  } else if (msg.includes("produit") || msg.includes("article")) {
    reply = "Nous avons une large gamme de produits. Vous pouvez naviguer dans notre catalogue pour trouver ce que vous cherchez.";
  } else if (msg.includes("disponible")) {
    reply = "La disponibilité des produits est indiquée sur chaque page produit. Certains articles peuvent être en rupture temporaire.";
  }

  // 🔹 Livraison
  else if (msg.includes("livraison") || msg.includes("expédition")) {
    reply = "La livraison prend généralement 2 à 5 jours ouvrables. Des frais peuvent s'appliquer selon la destination.";
  } else if (msg.includes("suivi")) {
    reply = "Vous pouvez suivre votre commande avec le numéro de suivi reçu après expédition.";
  }

  // 🔹 Paiement
  else if (msg.includes("paiement") || msg.includes("payer")) {
    reply = "Nous acceptons Mobile Money et Orange Money. Le paiement se fait directement lors de la validation de la commande.";
  } else if (msg.includes("sécurisé")) {
    reply = "Toutes les transactions sont sécurisées et cryptées pour votre protection.";
  }

  // 🔹 Retours et échanges
  else if (msg.includes("retour") || msg.includes("remboursement")) {
    reply = "Vous pouvez retourner un produit sous 7 jours pour un remboursement ou un échange gratuit.";
  } else if (msg.includes("échange")) {
    reply = "Nous proposons un échange facile et gratuit dans les 7 jours suivant la réception de votre commande.";
  }

  // 🔹 Support client
  else if (msg.includes("contact") || msg.includes("assistance") || msg.includes("aide")) {
    reply = "Vous pouvez nous contacter via notre formulaire de contact, par téléphone ou via WhatsApp pour toute assistance. Pour plus d'informations, veuillez consulter la rubrique contact de notre site.";
  }

  // 🔹 Promotions
  else if (msg.includes("promo") || msg.includes("réduction") || msg.includes("offre")) {
    reply = "Nous avons des offres spéciales régulièrement. Consultez notre page d'offres pour ne rien manquer !";
  }

  // 🔹 Horaires
  else if (msg.includes("horaires") || msg.includes("ouvert")) {
    reply = "Notre service client est disponible du lundi au vendredi de 9h à 18h.";
  }

  res.json({ reply });
});

// 🚀 CHANGEMENT ICI : pour Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Serveur démarré sur le port ${PORT}`));
