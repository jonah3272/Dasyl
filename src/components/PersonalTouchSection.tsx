import { Heart, Coffee, MapPin } from "lucide-react";

const PersonalTouchSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-muted to-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-lg border border-border/20">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gentle-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-soft-sage" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              A Little About Life Outside Therapy
            </h3>
          </div>
          
          <div className="prose prose-lg mx-auto text-center text-muted-foreground leading-relaxed">
            <p className="mb-6">
              When I'm not in session, you'll probably find me lacing up my running shoes for a morning trail run 
              or catching a Milwaukee Bucks game (Go Bucks!). There's something about the mental game in sports—whether 
              it's pushing through mile 20 of a marathon or watching Giannis work through adversity—that reminds me 
              why I love this work.
            </p>
            
            <p className="mb-6">
              I believe therapy works best when you feel like you're talking to a real person, not just a professional 
              in a white coat. So whether you want to chat about your latest PR, debate the Packers' playoff chances, 
              or share what's really going on in your world, I'm here for all of it.
            </p>
            
            <div className="bg-forest-green/5 rounded-2xl p-6 border-l-4 border-forest-green">
              <p className="text-foreground font-medium mb-2">
                "The best conversations happen when we can be ourselves."
              </p>
              <p className="text-sm text-muted-foreground">
                Bring your whole self to our sessions—hobbies, interests, quirks, and all.
              </p>
            </div>
          </div>
          
          {/* Fun facts */}
          <div className="mt-8 grid grid-cols-1 gap-4 text-center">
            <div className="p-4">
              <MapPin className="w-6 h-6 text-action-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground">Panama City, Panama</p>
              <p className="text-xs text-muted-foreground">Midwest heart, West Coast licensed</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalTouchSection;