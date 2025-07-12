import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredItems = [
    {
      id: 1,
      title: "AK-47 | Redline",
      game: "CS2",
      price: "₽12,500",
      rating: 4.8,
      seller: "ProGamer_2024",
      category: "Скины",
      verified: true,
      discount: 15,
    },
    {
      id: 2,
      title: "Legendary Account",
      game: "Valorant",
      price: "₽25,000",
      rating: 4.9,
      seller: "TrustedSeller",
      category: "Аккаунты",
      verified: true,
      discount: null,
    },
    {
      id: 3,
      title: "1000 V-Bucks",
      game: "Fortnite",
      price: "₽800",
      rating: 4.7,
      seller: "CurrencyDealer",
      category: "Валюта",
      verified: true,
      discount: 10,
    },
    {
      id: 4,
      title: "Dragon Lore AWP",
      game: "CS2",
      price: "₽45,000",
      rating: 5.0,
      seller: "EliteSkins",
      category: "Скины",
      verified: true,
      discount: null,
    },
  ];

  const categories = [
    { name: "Скины", icon: "Palette", count: "2,543" },
    { name: "Аккаунты", icon: "User", count: "892" },
    { name: "Валюта", icon: "Coins", count: "1,234" },
    { name: "Предметы", icon: "Package", count: "3,456" },
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-gaming-electric/20 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-orbitron font-bold text-gaming-electric">
                GAME<span className="text-gaming-neon">MART</span>
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-gaming-electric transition-colors"
                >
                  Каталог
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-gaming-electric transition-colors"
                >
                  Продавцы
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-gaming-electric transition-colors"
                >
                  Рейтинги
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-gaming-electric transition-colors"
                >
                  Новости
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Input
                  placeholder="Поиск товаров..."
                  className="w-64 bg-gaming-dark/50 border-gaming-electric/30 focus:border-gaming-electric"
                />
                <Icon
                  name="Search"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                  size={16}
                />
              </div>
              <Button
                variant="outline"
                className="border-gaming-electric text-gaming-electric hover:bg-gaming-electric hover:text-black"
              >
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
              </Button>
              <Button className="bg-gaming-electric hover:bg-gaming-electric/80 text-black font-medium">
                <Icon name="User" size={16} className="mr-2" />
                Профиль
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gaming-purple/20 via-gaming-dark to-gaming-cyan/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 animate-slide-up">
            <span className="text-gaming-electric">ИГРОВОЙ</span>
            <br />
            <span className="text-white">МАРКЕТПЛЕЙС</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            Покупайте и продавайте игровые товары с полной безопасностью.
            Проверенные продавцы, гарантия сделок, мгновенная доставка.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button
              size="lg"
              className="bg-gaming-electric hover:bg-gaming-electric/80 text-black font-medium animate-glow"
            >
              <Icon name="Gamepad2" size={20} className="mr-2" />
              Начать покупки
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gaming-neon text-gaming-neon hover:bg-gaming-neon hover:text-black"
            >
              <Icon name="Store" size={20} className="mr-2" />
              Стать продавцом
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-orbitron font-bold text-center mb-12">
            <span className="text-gaming-electric">КАТЕГОРИИ</span> ТОВАРОВ
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="bg-card/50 border-gaming-electric/20 hover:border-gaming-electric/50 transition-all hover:scale-105 cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <Icon
                    name={category.icon as any}
                    size={32}
                    className="mx-auto mb-4 text-gaming-electric"
                  />
                  <h4 className="font-orbitron font-semibold mb-2">
                    {category.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {category.count} товаров
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 px-4 bg-gaming-dark/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-orbitron font-bold text-center mb-12">
            <span className="text-gaming-neon">ТОПОВЫЕ</span> ТОВАРЫ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <Card
                key={item.id}
                className="bg-card border-gaming-electric/20 hover:border-gaming-electric/50 transition-all hover:scale-105 group cursor-pointer"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant="outline"
                      className="border-gaming-cyan text-gaming-cyan"
                    >
                      {item.game}
                    </Badge>
                    {item.discount && (
                      <Badge className="bg-gaming-neon text-black">
                        -{item.discount}%
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg font-orbitron group-hover:text-gaming-electric transition-colors">
                    {item.title}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                    {item.verified && (
                      <Icon
                        name="BadgeCheck"
                        size={14}
                        className="text-gaming-electric"
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-orbitron font-bold text-gaming-electric">
                      {item.price}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Icon
                        name="Star"
                        size={14}
                        className="text-yellow-400 fill-current"
                      />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Icon name="User" size={14} className="mr-1" />
                    {item.seller}
                  </div>
                  <Button className="w-full bg-gaming-electric hover:bg-gaming-electric/80 text-black font-medium">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />В
                    корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-orbitron font-bold text-center mb-12">
            ПОЧЕМУ <span className="text-gaming-electric">ВЫБИРАЮТ НАС</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gaming-electric/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="Shield"
                  size={32}
                  className="text-gaming-electric"
                />
              </div>
              <h4 className="font-orbitron font-semibold text-xl mb-3">
                Безопасность
              </h4>
              <p className="text-muted-foreground">
                Все продавцы проходят верификацию. Гарантия возврата средств.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gaming-electric/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-gaming-electric" />
              </div>
              <h4 className="font-orbitron font-semibold text-xl mb-3">
                Скорость
              </h4>
              <p className="text-muted-foreground">
                Мгновенная доставка цифровых товаров после подтверждения оплаты.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gaming-electric/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="Headphones"
                  size={32}
                  className="text-gaming-electric"
                />
              </div>
              <h4 className="font-orbitron font-semibold text-xl mb-3">
                Поддержка 24/7
              </h4>
              <p className="text-muted-foreground">
                Круглосуточная техническая поддержка для решения любых вопросов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gaming-dark border-t border-gaming-electric/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-orbitron font-bold text-gaming-electric mb-4">
                GAMEMART
              </h5>
              <p className="text-muted-foreground text-sm">
                Ведущий маркетплейс игровых товаров с гарантией безопасности и
                качества.
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Покупателям</h6>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-gaming-electric transition-colors"
                  >
                    Как купить
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gaming-electric transition-colors"
                  >
                    Гарантии
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gaming-electric transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Продавцам</h6>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-gaming-electric transition-colors"
                  >
                    Как продавать
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gaming-electric transition-colors"
                  >
                    Комиссии
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gaming-electric transition-colors"
                  >
                    Верификация
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Контакты</h6>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <Icon name="Mail" size={14} className="mr-2" />
                  support@gamemart.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MessageCircle" size={14} className="mr-2" />
                  Telegram
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" size={14} className="mr-2" />
                  8-800-555-35-35
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gaming-electric/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 GameMart. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
