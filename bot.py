import telebot
from telebot import types

TOKEN = "8909171601:AAEzKbJCHqtLzQpk8Cwcndr2BCDIVTWdXmg"
SITE_URL = "https://kaleidoscopic-chebakia-8f5bd4.netlify.app"
PHONE = "+93792696278"
TELEGRAM_USERNAME = "Shirzad_208"

bot = telebot.TeleBot(TOKEN)


@bot.message_handler(commands=['start'])
def start(message):
    keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True)

    web_app_btn = types.KeyboardButton(
        text="🔥 باز کردن Z208 Studio",
        web_app=types.WebAppInfo(url=SITE_URL)
    )
    keyboard.add(web_app_btn)
    keyboard.add(
        types.KeyboardButton("📞 تماس با من"),
        types.KeyboardButton("ℹ️ درباره ما")
    )

    bot.send_message(
        message.chat.id,
        f"سلام {message.from_user.first_name}! 👋\n\n"
        "به **Z208 Studio** خوش اومدی!\n"
        "روی دکمه زیر بزن تا پروژه‌های من رو ببینی:",
        parse_mode="Markdown",
        reply_markup=keyboard
    )


@bot.message_handler(func=lambda msg: msg.text == "📞 تماس با من")
def contact(msg):
    keyboard = types.InlineKeyboardMarkup()
    keyboard.add(
        types.InlineKeyboardButton(
            "📱 چت در تلگرام", url=f"https://t.me/{TELEGRAM_USERNAME}"),
        types.InlineKeyboardButton("📞 تماس مستقیم", url=f"tel:{PHONE}")
    )
    bot.send_message(msg.chat.id, f"📞 شماره: {PHONE}", reply_markup=keyboard)


@bot.message_handler(func=lambda msg: msg.text == "ℹ️ درباره ما")
def about(msg):
    keyboard = types.InlineKeyboardMarkup()
    keyboard.add(types.InlineKeyboardButton("🌐 مشاهده پروژه‌ها", url=SITE_URL))
    bot.send_message(msg.chat.id, "🎨 **Z208 Studio**\n\nخلاقیت بی‌مرز، طراحی بی‌همتا\n👤 موسس: شیرزاد",
                     parse_mode="Markdown", reply_markup=keyboard)


print("🤖 ربات شروع به کار کرد!")
bot.infinity_polling()
