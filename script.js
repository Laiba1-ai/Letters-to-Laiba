// ===============================
// Letters to Laiba ❤️
// ===============================

// ===============================
// Letters to Laiba ❤️
// ===============================

// ===============================
// Owner / Visitor Mode
// ===============================

const websitePassword = "laiba123";

const isOwner =
    sessionStorage.getItem("ownerMode") === "true";
const isSurprise =
new URLSearchParams(window.location.search)
.get("surprise") === "true";

// ===============================
// Letter Library Data - 120+ Ready-Made Letters
// ===============================

const letterLibraryData = [
  // 🎂 BIRTHDAY (15 letters)
  { id: "bday1", category: "birthday", title: "🎂 Happy Birthday, Cutie!", text: "Happy Birthday! 🎂 May your day be filled with happiness, laughter, beautiful memories, and endless blessings. May every dream you have come true, and may every new year bring more success, love, and peace into your life. 💖✨", emoji: "🎂" },
  { id: "bday2", category: "birthday", title: "🎉 Another Year of Blessings", text: "On your special day, I pray that Allah blesses you with good health, happiness, and success. May this year bring you closer to your dreams and fill your life with joy. Happy Birthday! 🎂💕", emoji: "🎁" },
  { id: "bday3", category: "birthday", title: "🌟 You're Special Today", text: "Today is all about YOU! 🌟 May your birthday be as amazing as you are. Wishing you countless smiles, warm hugs, and moments that make your heart happy. Have a wonderful celebration! 🎈💖", emoji: "🎈" },
  { id: "bday4", category: "birthday", title: "🎂 Birthday Wishes For You", text: "Happy Birthday to someone who makes the world brighter! 🌟 May your day be filled with love, laughter, and all your favorite things. Here's to another year of beautiful memories! 💕🎉", emoji: "🎊" },
  { id: "bday5", category: "birthday", title: "💝 A Special Birthday Letter", text: "On this beautiful day, I want you to know how much you mean to me. Your smile lights up my world, and your presence makes everything better. Happy Birthday, my dear! 🎂❤️", emoji: "🎂" },
  { id: "bday6", category: "birthday", title: "🎈 Celebrating You Today", text: "Happy Birthday! 🎈 Today we celebrate the amazing person you are. May your year ahead be filled with adventures, achievements, and endless happiness. Enjoy your special day! 🎉💖", emoji: "🎁" },
  { id: "bday7", category: "birthday", title: "🌸 Sweet Birthday Wishes", text: "Wishing you a birthday filled with sweet moments and beautiful surprises! 🌸 May Allah grant you all your heart's desires and keep you smiling always. Happy Birthday! 💕🎂", emoji: "🎂" },
  { id: "bday8", category: "birthday", title: "🎊 Make a Wish Today", text: "It's your birthday! 🎊 Close your eyes, make a wish, and blow out those candles. May all your dreams come true and may this year be your best one yet! 💖✨", emoji: "🕯️" },
  { id: "bday9", category: "birthday", title: "💫 Birthday Magic", text: "Happy Birthday! ✨ May magic fill your day and wonder fill your year. You deserve all the happiness in the world. Celebrate big today! 🎂🎉", emoji: "🎂" },
  { id: "bday10", category: "birthday", title: "🎁 Gift of Love", text: "This birthday, my gift to you is my love and prayers. 🎁 May Allah bless you abundantly and protect you always. Have a blessed and joyful birthday! 💕🤲", emoji: "💝" },
  { id: "bday11", category: "birthday", title: "🌺 Beautiful Birthday", text: "Like a blooming flower, may your life continue to grow more beautiful each day. 🌺 Happy Birthday to someone truly special! 🎂💖", emoji: "🌺" },
  { id: "bday12", category: "birthday", title: "⭐ Shine Bright This Year", text: "Happy Birthday! ⭐ May you shine brighter than ever before. Your light inspires everyone around you. Keep being amazing! 🎉💕", emoji: "✨" },
  { id: "bday13", category: "birthday", title: "🦋 Free as a Butterfly", text: "May your new year be as free and beautiful as a butterfly's flight. 🦋 Happy Birthday! Spread your wings and soar! 🎂💖", emoji: "🦋" },
  { id: "bday14", category: "birthday", title: "🍀 Lucky Birthday", text: "You're so lucky to have another year, and we're lucky to have you! 🍀 Happy Birthday! May fortune favor you always! 🎊💕", emoji: "🍀" },
  { id: "bday15", category: "birthday", title: "👑 Royal Birthday", text: "Today you're royalty! 👑 May your throne be comfortable and your crown be light. Happy Birthday to the king/queen of my heart! 🎂💖", emoji: "👑" },
  
  // 💕 LOVE (15 letters)
  { id: "love1", category: "love", title: "❤️ My Heart Belongs to You", text: "From the moment I met you, my heart knew it found its home. Every beat whispers your name, and every thought leads back to you. I love you more than words can express. 💕❤️", emoji: "❤️" },
  { id: "love2", category: "love", title: "🌹 You Are My Everything", text: "You are my sun in the morning, my stars at night, and my everything in between. 🌹 Without you, my world would be incomplete. I love you endlessly! 💖", emoji: "🌹" },
  { id: "love3", category: "love", title: "💕 Forever and Always", text: "My love for you has no beginning and no end. It stretches beyond time and space. Forever isn't long enough with you. I will love you always and forever. 💕♾️", emoji: "💕" },
  { id: "love4", category: "love", title: "🥰 You Make Me Complete", text: "Before you, I was just existing. With you, I'm truly living. You complete me in ways I never imagined possible. Thank you for being mine. 🥰💖", emoji: "🥰" },
  { id: "love5", category: "love", title: "💝 My Greatest Blessing", text: "Finding you was the greatest blessing of my life. 💝 Every day with you feels like a precious gift. I cherish you more than anything in this world. ❤️", emoji: "💝" },
  { id: "love6", category: "love", title: "🌙 Love You to the Moon", text: "I love you to the moon and back, across all the stars in the sky. 🌙✨ No distance could ever diminish what we share. You are my universe! 💕🌌", emoji: "🌙" },
  { id: "love7", category: "love", title: "🔥 Burning Love", text: "My love for you burns brighter than a thousand flames. 🔥 It warms my coldest days and lights up my darkest nights. You are my eternal fire! ❤️‍🔥", emoji: "🔥" },
  { id: "love8", category: "love", title: "🦋 Butterflies in My Stomach", text: "Even after all this time, you still give me butterflies. 🦋 That magical feeling when you walk into a room never fades. I'm so grateful for us! 💕", emoji: "🦋" },
  { id: "love9", category: "love", title: "🏆 My Greatest Achievement", text: "Out of everything I've accomplished in life, winning your heart is my proudest achievement. 🏆 You are my trophy, my treasure, my everything! 💖", emoji: "🏆" },
  { id: "love10", category: "love", title: "📖 Our Love Story", text: "Our love story is my favorite. 📖 Every chapter with you is more beautiful than the last. I can't wait to write forever together! 💕📚", emoji: "📖" },
  { id: "love11", category: "love", title: "🎵 You're My Favorite Song", text: "If my life were a song, you'd be the melody that makes it beautiful. 🎵 Your love is the music that fills my soul with joy! 💖🎶", emoji: "🎵" },
  { id: "love12", category: "love", title: "🌈 Rainbow After Rain", text: "You came into my life like a rainbow after the rain. 🌈 You brought color to my gray world and hope to my weary heart. I love you! 💕", emoji: "🌈" },
  { id: "love13", category: "love", title: "💎 Precious Like a Diamond", text: "Your love is as precious as the rarest diamond. 💎 I'll treasure it forever and protect it always. You are invaluable to me! 💖", emoji: "💎" },
  { id: "love14", category: "love", title: "🍯 Sweet as Honey", text: "Your love is sweeter than honey, softer than silk, and warmer than sunshine. 🍯☀️ Being loved by you is life's greatest pleasure! 💕", emoji: "🍯" },
  { id: "love15", category: "love", title: "🏠 You Are Home", text: "Home isn't a place; it's wherever you are. 🏠 In your arms, I've found my sanctuary, my safe haven, my everything. I love you! 💖", emoji: "🏠" },
  
  // 🥺 SORRY/APOLOGY (12 letters)
  { id: "sorry1", category: "apology", title: "🥺 I'm Truly Sorry", text: "I messed up, and I own it completely. I'm deeply sorry for hurting you. Please forgive me. You mean everything to me, and I hate that I caused you pain. 🥺💔", emoji: "🥺" },
  { id: "sorry2", category: "apology", title: "💔 My Heart Breaks Too", text: "Seeing you hurt because of me breaks my heart too. 💔 I never meant to cause you pain. I'm so sorry, my love. Please let me make it right. ❤️‍🩹", emoji: "💔" },
  { id: "sorry3", category: "apology", title: "🙏 Please Forgive Me", text: "I beg for your forgiveness. 🙏 I was wrong, and I regret it deeply. Give me a chance to prove I can do better. I love you too much to lose you. 🥺💕", emoji: "🙏" },
  { id: "sorry4", category: "apology", title: "😭 Tears of Regret", text: "These tears are from genuine regret. 😭 I'm sorry for my mistake. I promise to learn from this and never repeat it. Please forgive me, my sweet heart. 💔❤️", emoji: "😭" },
  { id: "sorry5", category: "apology", title: "🌧 Storm of Mistakes", text: "I created a storm in our peaceful sky. 🌧 I'm sorry for the chaos I brought into your life. Let me help clear the clouds. I love you! ☀️💕", emoji: "🌧" },
  { id: "sorry6", category: "apology", title: "🕊 White Flag of Surrender", text: "I surrender. 🕊 You were right, I was wrong. I'm sorry for my stubbornness and my mistake. Truce? Can we please make up? 🥺💖", emoji: "🕊" },
  { id: "sorry7", category: "apology", title: "🩹 Healing Our Hearts", text: "I know I wounded your heart, and I wish I could take it back. 🩹 Let me help heal what I broke. I'm truly, deeply sorry. ❤️‍🩹💕", emoji: "🩹" },
  { id: "sorry8", category: "apology", title: "🌹 Roses for Forgiveness", text: "If roses could express my apology, I'd give you a garden. 🌹 Since they can't, please accept my sincere sorry and my promise to do better. 🥺💖", emoji: "🌹" },
  { id: "sorry9", category: "apology", title: "⏰ Time Machine Wish", text: "If I had a time machine, I'd go back and undo my mistake. ⏰ Since I don't, I offer my heartfelt apology and commitment to change. I'm sorry! 💔", emoji: "⏰" },
  { id: "sorry10", category: "apology", title: "🎁 Sorry Gift", text: "This apology comes with a promise: I will work every day to regain your trust. 🎁 You deserve nothing less than my best. I'm sorry! 💕", emoji: "🎁" },
  { id: "sorry11", category: "apology", title: "💌 Letter of Remorse", text: "These words carry my deepest remorse. 💌 I failed you, and I'm devastated about it. Please find it in your heart to forgive me. I love you! 🥺❤️", emoji: "💌" },
  { id: "sorry12", category: "apology", title: "🤞 Second Chance Please", text: "Everyone deserves a second chance, right? 🤞 I'm asking for mine. I'm sorry, and I'll prove I've learned from this. Please don't give up on us! 💖", emoji: "🤞" },
  
  // 💍 PROPOSAL (10 letters)
  { id: "prop1", category: "proposal", title: "💍 Will You Marry Me?", text: "From the moment I met you, I knew you were the one. You've made every day brighter, every moment sweeter, and every dream possible. Will you make me the happiest person alive? Will you marry me? 💍❤️", emoji: "💍" },
  { id: "prop2", category: "proposal", title: "🌟 My Forever Person", text: "I don't want to spend another day without knowing you'll be mine forever. 🌟 You're my past, present, and future. Say yes to forever with me? 💍💕", emoji: "🌟" },
  { id: "prop3", category: "proposal", title: "💕 One Question, One Lifetime", text: "One question will change everything: Will you spend the rest of your life making me the luckiest person alive? Say yes, and let's start forever! 💍♾️", emoji: "💕" },
  { id: "prop4", category: "proposal", title: "👑 Be My Queen/King", text: "I've found my royalty. 👑 Will you wear this ring and rule my heart forever? Be my partner in this beautiful journey called life? 💍👑", emoji: "👑" },
  { id: "prop5", category: "proposal", title: "📜 Our Next Chapter", text: "Our love story has been perfect so far. 📜 But there's one chapter missing: 'Happily Ever After.' Will you write it with me? Say yes! 💍💖", emoji: "📜" },
  { id: "prop6", category: "proposal", title: "🏡 Building Our Home", text: "I want to build a home with you, not just a house but a lifetime of memories. 🏡 Will you marry me and make all my dreams come true? 💍🏠", emoji: "🏡" },
  { id: "prop7", category: "proposal", title: "🌙 Under the Stars", text: "Under these stars, with you in my arms, I ask the most important question: Will you be mine forever? 🌙💍 Say yes and let's touch the stars together! ✨", emoji: "🌙" },
  { id: "prop8", category: "proposal", title: "🎯 My Life's Purpose", text: "I've searched my whole life for purpose. Then I found you. 🎯 You are my why, my what, and my how. Marry me and be my purpose forever! 💍❤️", emoji: "🎯" },
  { id: "prop9", category: "proposal", title: "🔗 Eternal Bond", text: "Let's tie our souls together with a bond that even time cannot break. 🔗 Will you marry me and create an eternity of love? 💍♾️", emoji: "🔗" },
  { id: "prop10", category: "proposal", title: "💝 The Ultimate Gift", text: "The greatest gift life could give me is you saying yes. 💍 Will you accept my hand, my heart, and my forever? I love you! 💖", emoji: "💝" },
  
  // 💞 ANNIVERSARY (10 letters)
  { id: "anniv1", category: "anniversary", title: "💕 Happy Anniversary My Love", text: "Another year of us, another year of beautiful memories! 💕 Thank you for being my partner, my best friend, and my soulmate. Here's to many more years of love and happiness! Happy Anniversary! 🥂❤️", emoji: "🥂" },
  { id: "anniv2", category: "anniversary", title: "🌹 Years of Love", text: "Every year with you is more beautiful than the last. 🌹 Thank you for filling our days with love, laughter, and endless joy. Happy Anniversary to us! 💖", emoji: "🌹" },
  { id: "anniv3", category: "anniversary", title: "⏳ Time Flies With You", text: "They say time flies when you're having fun. ⏳ That must be why these years felt like moments! Being with you is pure bliss. Happy Anniversary! 💕✨", emoji: "⏳" },
  { id: "anniv4", category: "anniversary", title: "📅 Mark This Day", text: "On this day, our hearts became one. 📅 Every anniversary reminds me of the best decision I ever made: choosing you! I love you more each day! 💍❤️", emoji: "📅" },
  { id: "anniv5", category: "anniversary", title: "🎊 Celebrating Us", text: "Today we celebrate US! 🎊 Our love, our journey, our beautiful life together. Thank you for being exactly who you are. Happy Anniversary, my love! 💖🎉", emoji: "🎊" },
  { id: "anniv6", category: "anniversary", title: "🌟 Still Falling for You", text: "After all these years, I still fall for you every single day. 🌟 Your smile, your laugh, your everything still gives me butterflies. Happy Anniversary! 💕🦋", emoji: "🌟" },
  { id: "anniv7", category: "anniversary", title: "💞 Growing Together", text: "We've grown, we've learned, we've loved. 💞 Through every challenge and triumph, we've done it together. Here's to our beautiful journey! Happy Anniversary! 🥂💖", emoji: "💞" },
  { id: "anniv8", category: "anniversary", title: "🏆 Champions of Love", text: "We've won the greatest prize: each other! 🏆 Every anniversary is proof that true love exists. Thank you for being my champion! Happy Anniversary! 💍❤️", emoji: "🏆" },
  { id: "anniv9", category: "anniversary", title: "📖 Our Story Continues", text: "Another chapter completed, another begins! 📖 Our love story gets better with every page. I can't wait to see what's next! Happy Anniversary! 💕📚", emoji: "📖" },
  { id: "anniv10", category: "anniversary", title: "🔥 Still Burning Bright", text: "Our love still burns as bright as day one. 🔥 Thank you for keeping the flame alive and our hearts connected. Happy Anniversary, my eternal love! 💖🕯️", emoji: "🔥" },
  
  // 👫 FRIENDSHIP (10 letters)
  { id: "friend1", category: "friendship", title: "🤝 Best Friend Forever", text: "Friends like you are once in a lifetime! 🤝 Thank you for being my partner in crime, my shoulder to cry on, and my constant source of joy. Best friends forever! 💙✨", emoji: "🤝" },
  { id: "friend2", category: "friendship", title: "☕ Coffee & Conversations", text: "Remember all our coffee dates and deep conversations? ☕ Those moments mean the world to me. Thank you for being such an amazing friend! 💕", emoji: "☕" },
  { id: "friend3", category: "friendship", title: "😂 Laughter Therapy", text: "Nobody makes me laugh like you do! 😂 Your humor is my favorite therapy. Thank you for all the giggles, guffaws, and belly laughs! Bestie forever! 💖", emoji: "😂" },
  { id: "friend4", category: "friendship", title: "🌈 Rainbow Friend", text: "You add color to my life like a beautiful rainbow! 🌈 Thank you for brightening even my darkest days. So grateful for your friendship! 💕✨", emoji: "🌈" },
  { id: "friend5", category: "friendship", title: "🎭 Partner in Crime", text: "From silly adventures to serious talks, you've been there for it all! 🎭 Thank you for being my partner in crime. Here's to more mischief together! 😄💙", emoji: "🎭" },
  { id: "friend6", category: "friendship", title: "💪 My Support System", text: "When life knocked me down, you helped me up. 💪 When I needed someone, you were there. Thank you for being my rock! Best friends forever! 💖", emoji: "💪" },
  { id: "friend7", category: "friendship", title: "🎉 Celebration Buddy", text: "Every celebration is better with you! 🎉 Thank you for being my hype person, my cheerleader, and my celebration buddy! Love you, bestie! 💕🎊", emoji: "🎉" },
  { id: "friend8", category: "friendship", title: "📱 Always Connected", text: "Distance means nothing when hearts are connected! 📱 Thank you for always being a call away. True friendship knows no miles! 💙✨", emoji: "📱" },
  { id: "friend9", category: "friendship", title: "🍰 Sweet Memories", text: "All our shared desserts, secrets, and stories! 🍰 These sweet memories are treasures I'll keep forever. Grateful for you, my friend! 💖", emoji: "🍰" },
  { id: "friend10", category: "friendship", title: "🌟 Shining Together", text: "We shine brighter together! 🌟 Thank you for being my star, my guide, and my constant. Friendship goals achieved with you! 💕⭐", emoji: "🌟" },
  
  // 🌙 EID (10 letters)
  { id: "eid1", category: "eid", title: "🌙 Eid Mubarak!", text: "Eid Mubarak! 🌙 May Allah bless you and your family with happiness, peace, and prosperity. May this Eid bring joy to your heart and sweetness to your life! 🕌✨", emoji: "🌙" },
  { id: "eid2", category: "eid", title: "🕌 Blessed Eid", text: "On this blessed day, I pray Allah accepts all your good deeds and grants you your heart's desires. Eid Mubarak to you and your loved ones! 🤲💕", emoji: "🕌" },
  { id: "eid3", category: "eid", title: "⭐ Eid Greetings", text: "Sending you warmest Eid greetings! ⭐ May your day be filled with laughter, love, and delicious feasts. Eid Mubarak! 🎉💖", emoji: "⭐" },
  { id: "eid4", category: "eid", title: "🎁 Eid Blessings", text: "May Allah's blessings shower upon you like rain! 🎁 May your home be filled with joy and your heart with peace. Eid Mubarak! 🌙✨", emoji: "🎁" },
  { id: "eid5", category: "eid", title: "🍬 Sweet Eid", text: "May your Eid be as sweet as the sheer khurma and as bright as the Eid moon! 🍬🌙 Wishing you happiness that lasts all year! Eid Mubarak! 💕", emoji: "🍬" },
  { id: "eid6", category: "eid", title: "🤲 Prayerful Eid", text: "On this sacred day, I pray for your happiness, health, and success. 🤲 May Allah's mercy surround you always. Eid Mubarak! 🌙💖", emoji: "🤲" },
  { id: "eid7", category: "eid", title: "👨‍👩‍👧‍👦 Family Eid", text: "Eid is beautiful when spent with loved ones! 👨‍👩‍👧‍👦 May your gatherings be filled with warmth and your hearts with gratitude. Eid Mubarak! 🕌💕", emoji: "👨‍👩‍👧‍👦" },
  { id: "eid8", category: "eid", title: "✨ Radiant Eid", text: "May your Eid radiate with joy and your life sparkle with blessings! ✨ Wishing you a celebration as wonderful as you are! Eid Mubarak! 🌟💖", emoji: "✨" },
  { id: "eid9", category: "eid", title: "🕊 Peaceful Eid", text: "May peace dwell in your heart and harmony in your home. 🕊 Wishing you a serene and blessed Eid! Eid Mubarak! 🌙🤲", emoji: "🕊" },
  { id: "eid10", category: "eid", title: "🎊 Joyful Eid", text: "Let the joy of Eid fill your soul and the blessings fill your life! 🎊 May this day mark the beginning of something beautiful! Eid Mubarak! 💕🌙", emoji: "🎊" },
  
  // 🌸 MOTHER'S DAY (8 letters)
  { id: "mom1", category: "mothersday", title: "🌸 Happy Mother's Day", text: "To the woman who gave me everything: Happy Mother's Day! 🌸 Your love, sacrifice, and wisdom shaped who I am. I owe you more than words can say. I love you, Mom! 💕", emoji: "🌸" },
  { id: "mom2", category: "mothersday", title: "👩‍👧 First Teacher", text: "You were my first teacher, my first friend, my first love. 👩‍👧 Thank you for every lesson, every hug, every prayer. Happy Mother's Day! 💖", emoji: "👩‍👧" },
  { id: "mom3", category: "mothersday", title: "🏠 Heart of Our Home", text: "You are the heart that keeps our home beating! 🏠 Your warmth, care, and love make every corner special. Happy Mother's Day, Queen! 👑💕", emoji: "🏠" },
  { id: "mom4", category: "mothersday", title: "🙏 Prayers for Mom", text: "May Allah bless you with health, happiness, and longevity! 🙏 Your prayers have carried me through everything. Today I pray for you! Happy Mother's Day! 🤲💖", emoji: "🙏" },
  { id: "mom5", category: "mothersday", title: "🦋 Beautiful Soul", text: "Your soul is as beautiful as your love is endless! 🦋 Thank you for being my angel on earth. Happy Mother's Day! 💕✨", emoji: "🦋" },
  { id: "mom6", category: "mothersday", title: "🍽 Endless Sacrifices", text: "You gave up so much for me, often without me even knowing. 🍽 Today I honor your sacrifices and thank you from the depths of my heart! Love you, Mom! 💖", emoji: "🍽" },
  { id: "mom7", category: "mothersday", title: "📚 Wisdom Keeper", text: "Your wisdom has guided me through every storm! 📚 Thank you for teaching me strength, kindness, and faith. Happy Mother's Day! 💕🌟", emoji: "📚" },
  { id: "mom8", category: "mothersday", title: "💝 Unconditional Love", text: "Your love asks for nothing and gives everything! 💝 That's the miracle of motherhood. Thank you for loving me unconditionally! Happy Mother's Day! 🌸❤️", emoji: "💝" },
  
  // 👔 FATHER'S DAY (8 letters)
  { id: "dad1", category: "fathersday", title: "👔 Happy Father's Day", text: "To my hero, my protector, my guide: Happy Father's Day! 👔 Your strength and wisdom have shaped my life. I'm who I am because of you! Love you, Dad! 💙", emoji: "👔" },
  { id: "dad2", category: "fathersday", title: "🛡️ My Shield", text: "You've been my shield against every storm! 🛡️ Thank you for protecting me, teaching me, and believing in me. Happy Father's Day! 💪💙", emoji: "🛡️" },
  { id: "dad3", category: "fathersday", title: "⭐ Silent Hero", text: "Heroes don't always wear capes; sometimes they're called Dad! ⭐ Thank you for working silently, loving loudly, and being my everything! Happy Father's Day! 💖", emoji: "⭐" },
  { id: "dad4", category: "fathersday", title: "🎓 Life Lessons", text: "Every lesson you taught me became a stepping stone to success! 🎓 Thank you for being my mentor, my coach, my father! Happy Father's Day! 💙", emoji: "🎓" },
  { id: "dad5", category: "fathersday", title: "🏗 Builder of Dreams", text: "You built the foundation for all my dreams! 🏗 Thank you for your hard work, sacrifices, and endless support! Love you, Dad! 💕", emoji: "🏗" },
  { id: "dad6", category: "fathersday", title: "🎣 Memory Maker", text: "From fishing trips to heart-to-hearts, you made memories that last forever! 🎣 Thank you for every moment! Happy Father's Day! 💙✨", emoji: "🎣" },
  { id: "dad7", category: "fathersday", title: "🌲 Strong as a Tree", text: "Strong, steady, and sheltering – that's you, Dad! 🌲 Thank you for being my constant in a changing world! Happy Father's Day! 💖", emoji: "🌲" },
  { id: "dad8", category: "fathersday", title: "🙏 Blessed to Have You", text: "Allah blessed me with the best father! 🙏 I pray you're granted health, happiness, and all your heart's desires! Happy Father's Day! 🤲💙", emoji: "🙏" },
  
  // 🎓 GRADUATION (8 letters)
  { id: "grad1", category: "graduation", title: "🎓 Congratulations Graduate!", text: "You did it! 🎓 All those late nights, hard work, and determination paid off! Congratulations on your graduation! The world awaits your brilliance! ✨💖", emoji: "🎓" },
  { id: "grad2", category: "graduation", title: "🌟 New Beginnings", text: "This isn't an ending; it's a beautiful beginning! 🌟 Congratulations on graduating! Go conquer the world with your amazing talents! 💪💕", emoji: "🌟" },
  { id: "grad3", category: "graduation", title: "📜 Diploma of Dreams", text: "That diploma represents so much more than grades – it's your dedication! 📜 Congratulations, graduate! Dream bigger, aim higher! 🎉💖", emoji: "📜" },
  { id: "grad4", category: "graduation", title: "🚀 Launch Pad", text: "Graduation is your launch pad to greatness! 🚀 Buckle up and prepare for an incredible journey! Congratulations! 💫✨", emoji: "🚀" },
  { id: "grad5", category: "graduation", title: "🏆 Achievement Unlocked", text: "Achievement unlocked: GRADUATE! 🏆 Now unlock the world! Congratulations on this massive accomplishment! So proud of you! 💕🎊", emoji: "🏆" },
  { id: "grad6", category: "graduation", title: "🎯 Goals Achieved", text: "You set a goal and crushed it! 🎯 That's the power of your determination! Congratulations, graduate! What's next? Sky's the limit! 💖✨", emoji: "🎯" },
  { id: "grad7", category: "graduation", title: "🦅 Soar High", text: "Spread your wings and soar, graduate! 🦅 The sky isn't the limit; it's just the beginning! Congratulations! 🌟💕", emoji: "🦅" },
  { id: "grad8", category: "graduation", title: "💎 Polished Gem", text: "Education has polished you into the gem you are! 💎 Now shine brightly and illuminate the world! Congratulations! ✨🎓", emoji: "💎" },
  
  // 🙏 THANK YOU (10 letters)
  { id: "thanks1", category: "thankyou", title: "🙏 Thank You From My Heart", text: "Thank you doesn't feel like enough, but here it is with all my heart! 🙏 Your kindness touched me deeply. I'm forever grateful for you! 💕", emoji: "🙏" },
  { id: "thanks2", category: "thankyou", title: "💝 Grateful for You", text: "I count my blessings, and you're at the top of the list! 💝 Thank you for being you, for doing what you did, for meaning what you mean to me! 💖", emoji: "💝" },
  { id: "thanks3", category: "thankyou", title: "🌟 You Made a Difference", text: "Your actions made such a difference in my life! 🌟 Thank you for caring, for helping, for being there when I needed it most! 💕", emoji: "🌟" },
  { id: "thanks4", category: "thankyou", title: "🤲 Deeply Thankful", text: "Words can't express how thankful I am! 🤲 Your generosity, kindness, and love mean everything to me. Thank you from the bottom of my heart! 💖", emoji: "🤲" },
  { id: "thanks5", category: "thankyou", title: "🎁 Gift of Kindness", text: "Your kindness was the most beautiful gift! 🎁 Thank you for thinking of me, for helping me, for being amazing! I appreciate you! 💕", emoji: "🎁" },
  { id: "thanks6", category: "thankyou", title: "💌 Heartfelt Thanks", text: "Sending you the biggest, warmest thank you! 💌 Your support meant the world to me. I'll never forget your kindness! 💖✨", emoji: "💌" },
  { id: "thanks7", category: "thankyou", title: "🌈 Rainbow of Gratitude", text: "My gratitude for you spans every color of the rainbow! 🌈 Thank you for bringing brightness into my life! So appreciative! 💕", emoji: "🌈" },
  { id: "thanks8", category: "thankyou", title: "🍀 Fortunate to Know You", text: "I feel so fortunate to have you in my life! 🍀 Thank you for everything you've done. Your kindness will never be forgotten! 💖", emoji: "🍀" },
  { id: "thanks9", category: "thankyou", title: "🎵 Song of Thanks", text: "If I could sing, I'd compose a symphony of thanks! 🎵 Since I can't, please accept these heartfelt words: THANK YOU! 💕✨", emoji: "🎵" },
  { id: "thanks10", category: "thankyou", title: "🔥 Grateful Fire", text: "My gratitude burns brighter than any flame! 🔥 Thank you for lighting up my life with your kindness and care! Forever thankful! 💖", emoji: "🔥" },
  
  // 🌹 ROMANTIC (12 letters)
  { id: "rom1", category: "romantic", title: "🌹 Madly in Love", text: "I'm madly, deeply, irrevocably in love with you! 🌹 Every fiber of my being screams your name. You are my everything, my always, my forever! 💕❤️", emoji: "🌹" },
  { id: "rom2", category: "romantic", title: "💋 Kissed by Angels", text: "Loving you feels like being kissed by angels! 💋 Every moment with you is divine, every touch is electric, every look is intoxicating! 💖", emoji: "💋" },
  { id: "rom3", category: "romantic", title: "🔥 Passionate Love", text: "My love for you burns with passionate intensity! 🔥 You ignite something in me that can never be extinguished. I crave you always! 💕🔥", emoji: "🔥" },
  { id: "rom4", category: "romantic", title: "🌙 Moonlit Romance", text: "Under the moonlight, my love for you shines brightest! 🌙 You are my romantic dream come true, my fantasy made real! 💖✨", emoji: "🌙" },
  { id: "rom5", category: "romantic", title: "💃 Dance of Love", text: "Our love is the most beautiful dance! 💃 Every step, every turn, every moment in sync. Let's dance through life together, forever! 💕🎵", emoji: "💃" },
  { id: "rom6", category: "romantic", title: "📝 Poetry of Us", text: "If love were poetry, we'd be the most beautiful verse ever written! 📝 Our story is romance personified! I adore you! 💖📚", emoji: "📝" },
  { id: "rom7", category: "romantic", title: "🍷 Intoxicated by Love", text: "Your love intoxicates me more than any wine! 🍷 One look from you and I'm drunk on affection! Cheers to us, my love! 🥂💕", emoji: "🍷" },
  { id: "rom8", category: "romantic", title: "🏰 Fairytale Romance", text: "You turned my life into a fairytale! 🏰 You're my prince/princess, my castle, my happily ever after! Living our romantic dream! 💖👑", emoji: "🏰" },
  { id: "rom9", category: "romantic", title: "🎨 Masterpiece of Love", text: "Our love is art's greatest masterpiece! 🎨 Every brushstroke of emotion, every color of passion! You are my beautiful creation! 💕🖼️", emoji: "🎨" },
  { id: "rom10", category: "romantic", title: "🌊 Ocean of Love", text: "My love for you is deeper than any ocean! 🌊 Vast, endless, and full of wonders! Dive into my heart and swim forever! 💖🏊", emoji: "🌊" },
  { id: "rom11", category: "romantic", title: "🎭 Romeo & Juliet vibes", text: "Forget Romeo & Juliet – OUR love story surpasses them all! 🎭 Because unlike theirs, ours will have a forever happy ending! 💕∞", emoji: "🎭" },
  { id: "rom12", category: "romantic", title: "💘 Struck by Cupid", text: "Cupid didn't just shoot an arrow; he launched a missile! 💘 I was struck hard and I'm never recovering! Helplessly, hopelessly in love with you! 💖", emoji: "💘" },
  
  // 🧸 CUTE (10 letters)
  { id: "cute1", category: "cute", title: "🧸 You're Adorable!", text: "Just wanted to remind you that you're incredibly adorable! 🧸 Your smile melts my heart every single time! Stay cute forever! 💕✨", emoji: "🧸" },
  { id: "cute2", category: "cute", title: "🐰 Bunny-Level Cute", text: "You're cuter than a bunny with a carrot! 🐰 How is that even possible?! Seriously though, you're the cutest human ever! 💖🐇", emoji: "🐰" },
  { id: "cute3", category: "cute", title: "🍰 Sweet as Cake", text: "You're sweeter than the sweetest cake! 🍰 Actually, scratch that – cakes should be jealous of YOUR sweetness! 🧁💕", emoji: "🍰" },
  { id: "cute4", category: "cute", title: "🌟 Twinkle Toes", text: "You have this magical twinkle that lights up everything! 🌟 Being around you feels like walking on sunshine! Stay sparkly! ✨💖", emoji: "🌟" },
  { id: "cute5", category: "cute", title: "🦄 Unicorn Rare", text: "People like you are as rare as unicorns! 🦄 Magical, beautiful, and absolutely enchanting! Never change your cute self! 💕🌈", emoji: "🦄" },
  { id: "cute6", category: "cute", title: "🐱 Kitty Cuteness", text: "You have cat-level cuteness! 🐱 That purr-fect combination of playful and precious! Meow-velous human! 💖🐈", emoji: "🐱" },
  { id: "cute7", category: "cute", title: "🍭 Lollipop Sweet", text: "Sweeter than a lollipop, cuter than a puppy, brighter than a rainbow! 🍭 How do you even exist?! You're AMAZING! 💕🌈", emoji: "🍭" },
  { id: "cute8", category: "cute", title: "🎀 Bow-Tied Beauty", text: "You're wrapped in the prettiest bow of cuteness! 🎀 Unwrapping your presence is the best gift ever! Stay adorable! 💖✨", emoji: "🎀" },
  { id: "cute9", category: "cute", title: "🌸 Flower Child", text: "Blooming with cuteness like the prettiest flower! 🌸 Nature worked overtime creating someone as lovely as you! 💕🌺", emoji: "🌸" },
  { id: "cute10", category: "cute", title: "🍼 Baby-Face Beautiful", text: "That baby face of yours is dangerously cute! 🍼 One look and everyone melts! Weaponize that cuteness responsibly! 😄💖", emoji: "🍼" },
  
  // 💭 MISSING YOU (10 letters)
  { id: "miss1", category: "missing", title: "💭 Missing You Terribly", text: "Every moment apart feels like an eternity! 💭 I miss your laugh, your smile, your presence. Come back soon – my heart needs you! 💕😢", emoji: "💭" },
  { id: "miss2", category: "missing", title: "🌙 Counting Days", text: "I'm counting every day, every hour, every minute until we meet again! 🌙 Missing you is my constant companion! Hurry back! 💖⏰", emoji: "🌙" },
  { id: "miss3", category: "missing", title: "📱 Wish You Were Here", text: "Everything I do, I wish you were here! 📱 This song reminds me of you, this view needs you, this moment requires you! Miss you! 💕🌟", emoji: "📱" },
  { id: "miss4", category: "missing", title: "🦋 Empty Without You", text: "My world feels empty without your butterfly wings fluttering through it! 🦋 Come fill my life with color again! Missing you! 💖🌈", emoji: "🦋" },
  { id: "miss5", category: "missing", title: "🌊 Waves of Longing", text: "Missing you hits me in waves – sometimes gentle, sometimes overwhelming! 🌊 But every wave carries me closer to you! 💕🏄", emoji: "🌊" },
  { id: "miss6", category: "missing", title: "📍 Distance Sucks", text: "This stupid distance between us! 📍 I hate it! But I love YOU more than I hate the miles! Soon we'll close this gap! Miss you! 💖", emoji: "📍" },
  { id: "miss7", category: "missing", title: "🛏️ Bed Feels Cold", text: "This bed is way too big without you! 🛏️ Your warmth, your cuddles, your presence – all missed terribly! Come home soon! 💕🏠", emoji: "🛏️" },
  { id: "miss8", category: "missing", title: "🎵 Songs About You", text: "Every love song reminds me of you! 🎵 Every lyric speaks our story! Missing you while drowning in melodies! 💖🎶", emoji: "🎵" },
  { id: "miss9", category: "missing", title: "🌌 Same Moon", text: "At least we're under the same moon! 🌌 When I miss you, I look up and remember you're seeing this too! Connecting us across distance! 💕🌙", emoji: "🌌" },
  { id: "miss10", category: "missing", title: "⏳ Temporary Goodbye", text: "This goodbye is temporary, but my missing you is permanent until you return! ⏳ Hold on tight – reunion will be sweet! 💖🤗", emoji: "⏳" },
  
  // 🌍 LONG DISTANCE (4 letters)
  { id: "ld1", category: "longdistance", title: "🌍 Miles Can't Stop Love", text: "Miles separate our bodies but never our hearts! 🌍 True love knows no distance! We're proof that love conquers all! Stay strong, my love! 💕✈️", emoji: "🌍" },
  { id: "ld2", category: "longdistance", title: "✈️ Worth Every Mile", text: "Every mile between us is worth it because YOU are at the other end! ✈️ Our love is stronger than any distance! I believe in us! 💖🗺️", emoji: "✈️" },
  { id: "ld3", category: "longdistance", title: "📞 Virtual Hugs", text: "Sending virtual hugs through phone screens! 📞 Until I can hold you properly, these digital embraces will have to do! Miss you! 💕📱", emoji: "📞" },
  { id: "ld4", category: "longdistance", title: "🔗 Connected Souls", text: "Our souls are connected by invisible threads! 🔗 No amount of distance can break what we share! Long distance temporarily, together eternally! 💖∞", emoji: "🔗" },
  
  // ✨ SPECIAL MOMENTS (8 letters)
  { id: "spec1", category: "special", title: "✨ Magical Moments", text: "Some moments are pure magic, and you create them effortlessly! ✨ Thank you for filling my life with extraordinary ordinary days! 💕🌟", emoji: "✨" },
  { id: "spec2", category: "special", title: "📸 Picture Perfect", text: "Every moment with you is picture perfect! 📸 My heart's album is full of beautiful memories we've created! More please! 💖📷", emoji: "📸" },
  { id: "spec3", category: "special", title: "🎪 Circus of Joy", text: "Life with you is the most wonderful circus! 🎪 Full of surprises, laughter, and delightful chaos! Never stop making moments special! 💕🎭", emoji: "🎪" },
  { id: "spec4", category: "special", title: "🎠 Carousel Memories", text: "Our memories spin like a beautiful carousel! 🎠 Round and round, each one more precious than the last! Cherishing every ride! 💖🎡", emoji: "🎠" },
  { id: "spec5", category: "special", title: "🏖️ Beach Day Bliss", text: "Remember our beach days? 🏖️ Sun, sand, and your beautiful smile! Those moments are treasures! Let's make more! 💕🌊", emoji: "🏖️" },
  { id: "spec6", category: "special", title: "🌠 Shooting Stars", text: "Making wishes on shooting stars while holding your hand! 🌠 Those quiet, magical moments are etched in my heart forever! 💖✨", emoji: "🌠" },
  { id: "spec7", category: "special", title: "🎪 Adventure Buddies", text: "Every adventure is better with you! 🎪 From small explorations to grand journeys – you're my favorite travel companion! 💕🗺️", emoji: "🎪" },
  { id: "spec8", category: "special", title: "🏆 Trophy Moments", text: "Collecting trophy moments together! 🏆 Each memory a winner, each experience a champion! Our collection grows daily! 💖🥇", emoji: "🏆" },
  
  // 🎄 CHRISTMAS (8 letters)
  { id: "xmas1", category: "christmas", title: "🎄 Merry Christmas!", text: "Merry Christmas! 🎄 May your day be filled with warmth, love, and all the magic this season brings! Wishing you joy and peace! ❄️💕", emoji: "🎄" },
  { id: "xmas2", category: "christmas", title: "🎅 Santa's Favorite", text: "You must be Santa's favorite – you're definitely on the nice list! 🎅 Wishing you the merriest Christmas ever! 🎁💖", emoji: "🎅" },
  { id: "xmas3", category: "christmas", title: "❄️ Winter Wonderland", text: "May your Christmas be a winter wonderland of joy! ❄️ Snowflakes, hot cocoa, and beautiful memories await! Merry Christmas! ☕🎄", emoji: "❄️" },
  { id: "xmas4", category: "christmas", title: "🎁 Gift of Presence", text: "The best gift under the tree is YOUR presence! 🎁 Nothing compares to spending Christmas with you! Merry Christmas, my love! 💕🎄", emoji: "🎁" },
  { id: "xmas5", category: "christmas", title: "⭐ Star on Top", text: "You're the star on top of my Christmas tree! ⭐ The brightest, most beautiful part of my holiday! Merry Christmas! 🌟💖", emoji: "⭐" },
  { id: "xmas6", category: "christmas", title: "🦌 Reindeer Games", text: "Even Rudolph would be jealous of how you light up my world! 🦌 Playing reindeer games with my heart and winning! Merry Christmas! 💕🎮", emoji: "🦌" },
  { id: "xmas7", category: "christmas", title: "🍪 Cookies & Cocoa", text: "Warm cookies, hot cocoa, and your beautiful smile! 🍪 That's my recipe for a perfect Christmas! Merry Christmas, sweetheart! ☕🎄", emoji: "🍪" },
  { id: "xmas8", category: "christmas", title: "🔔 Jingle All the Way", text: "Jingle bells, jingle bells, I love you all the way! 🔔 My sleigh is full of love just for you! Merry Christmas! 💖🛷", emoji: "🔔" },
  
  // 🎆 NEW YEAR (8 letters)
  { id: "ny1", category: "newyear", title: "🎆 Happy New Year!", text: "Happy New Year! 🎆 May this year bring you endless opportunities, beautiful moments, and dreams come true! Cheers to new beginnings! 🥂✨", emoji: "🎆" },
  { id: "ny2", category: "newyear", title: "🥂 Toast to Tomorrow", text: "Raising a glass to tomorrow and all it holds! 🥂 May the new year be kinder, brighter, and more beautiful than the last! Happy New Year! 💕", emoji: "🥂" },
  { id: "ny3", category: "newyear", title: "📝 Blank Pages", text: "A new year is like a blank book! 📝 Let's fill it with beautiful stories, exciting chapters, and happy endings! Happy New Year! 📖💖", emoji: "📝" },
  { id: "ny4", category: "newyear", title: "🌅 Fresh Sunrise", text: "Every new year is a fresh sunrise! 🌅 New light, new warmth, new possibilities! Welcome it with open arms! Happy New Year! ☀️✨", emoji: "🌅" },
  { id: "ny5", category: "newyear", title: "🎯 Resolution Ready", text: "New year, new goals, same amazing you! 🎯 May your resolutions stick and your dreams take flight! Happy New Year! 💪💕", emoji: "🎯" },
  { id: "ny6", category: "newyear", title: "⏰ Countdown Complete", text: "The countdown is complete – it's GO time! ⏰ New year, new adventures, new memories in the making! Let's do this! Happy New Year! 🎉", emoji: "⏰" },
  { id: "ny7", category: "newyear", title: "🎊 Confetti Dreams", text: "Throwing confetti at our dreams this new year! 🎊 May every wish find its way to reality! Happy New Year! ✨💖", emoji: "🎊" },
  { id: "ny8", category: "newyear", title: "🔄 Reset Button", text: "Nature's reset button just pressed! 🔄 New year, clean slate, fresh energy! Make it count! Happy New Year! 💕🌟", emoji: "🔄" },
  
  // 💐 GET WELL SOON (6 letters)
  { id: "well1", category: "getwell", title: "💐 Get Well Soon!", text: "Sending healing vibes your way! 💐 May you recover quickly and be back to your amazing self soon! Take care! 💕🏥", emoji: "💐" },
  { id: "well2", category: "getwell", title: "🍲 Soup & Care", text: "Wish I could bring you soup and pamper you! 🍲 Until then, sending all my love and prayers for quick recovery! Feel better! 💖", emoji: "🍲" },
  { id: "well3", category: "getwell", title: "🌞 Sunshine Healing", text: "May healing sunshine warm your body and soul! 🌞 Rest well, recover fast, and come back stronger! Get well soon! ☀️💕", emoji: "🌞" },
  { id: "well4", category: "getwell", title: "🤒 Sick Days Suck", text: "Being sick is the worst! 🤒 But you're strong and you'll beat this! Rest up and heal quickly! Rooting for you! 💪💖", emoji: "🤒" },
  { id: "well5", category: "getwell", title: "🏥 Hospital Hero", text: "Even in hospital gowns, you're a hero! 🏥 Fighting battles bravely and winning! Get well soon, warrior! 💕🛡️", emoji: "🏥" },
  { id: "well6", category: "getwell", title: "💊 Medicine & Magic", text: "Take your medicine, rest well, and let healing magic work! 💊 Soon you'll be back causing trouble! Get well soon! 😄💖", emoji: "💊" },
  
  // 🍀 GOOD LUCK (6 letters)
  { id: "luck1", category: "goodluck", title: "🍀 Good Luck!", text: "Sending you all the luck in the universe! 🍀 May fortune favor you and success follow your every step! You've got this! 💪✨", emoji: "🍀" },
  { id: "luck2", category: "goodluck", title: "🎲 Roll the Dice", text: "Roll those dice with confidence! 🎲 Lady luck is on your side! Go crush it! Good luck! 💖🎯", emoji: "🎲" },
  { id: "luck3", category: "goodluck", title: "🌟 Stars Align", text: "May all the stars align perfectly for you! 🌟 The universe is conspiring in your favor! Good luck! ✨💕", emoji: "🌟" },
  { id: "luck4", category: "goodluck", title: "🐇 Rabbit's Foot", text: "If I could give you a rabbit's foot, I would! 🐇 Until then, take my wishes for good luck! You'll do great! 💖🍀", emoji: "🐇" },
  { id: "luck5", category: "goodluck", title: "🎯 Bullseye Bound", text: "You're bound to hit the bullseye! 🎯 With your skills and a bit of luck, nothing can stop you! Good luck! 💪✨", emoji: "🎯" },
  { id: "luck6", category: "goodluck", title: "🚀 Launch Success", text: "Countdown to your success: 3, 2, 1... BLAST OFF! 🚀 Good luck on your mission! You're destined for greatness! 💕🌟", emoji: "🚀" }
];

// Total: 120+ letters across all categories
// ===============================
// Universal Theme Engine
// ===============================

const themeData = {

    simple:{
        title:"💌 Simple Letter",
        gift:"💌",
        animation:"letter",
        background:"simple-bg",
        effects:["💌","✨","🤍"]
    },

    birthday:{
        title:"🎂 Happy Birthday",
        gift:"🎂",
        animation:"cake",
        background:"birthday-bg",
        effects:["🎈","🎂","🎉","✨"]
    },

    love:{
        title:"❤️ Love Letter",
        gift:"🌹",
        animation:"rose",
        background:"love-bg",
        effects:["❤️","🌹","💖","✨"]
    },

    proposal:{
        title:"💍 Proposal",
        gift:"💍",
        animation:"ring",
        background:"proposal-bg",
        effects:["💍","🌹","❤️","✨"]
    },

  sorry:{

title:"🥺 I'm Sorry",

gift:"💔",

animation:"broken-heart",

background:"sorry-bg",

effects:["🥺","💔","🌧","🕊"]

    },

    friendship:{
        title:"🤝 Friendship",
        gift:"☕",
        animation:"coffee",
        background:"friend-bg",
        effects:["🤝","☕","💙","✨"]
    },

    mother:{
        title:"🌸 Mother",
        gift:"💐",
        animation:"flowers",
        background:"mother-bg",
        effects:["🌸","💐","🦋","❤️"]
    },

    father:{
        title:"👔 Father",
        gift:"👔",
        animation:"tie",
        background:"father-bg",
        effects:["👔","💙","⭐","🛡️"]
    },

    eid:{
        title:"🌙 Eid Mubarak",
        gift:"🕌",
        animation:"moon",
        background:"eid-bg",
        effects:["🌙","🕌","✨","🎁"]
    },

    ramadan:{
        title:"🕌 Ramadan Kareem",
        gift:"🏮",
        animation:"lantern",
        background:"ramadan-bg",
        effects:["🌙","🏮","⭐","🕌"]
    },

    valentine:{
        title:"🌹 Happy Valentine",
        gift:"🧸",
        animation:"teddy",
        background:"valentine-bg",
        effects:["❤️","🌹","🧸","💖"]
    },

    anniversary:{
        title:"💖 Happy Anniversary",
        gift:"🥂",
        animation:"couple",
        background:"anniversary-bg",
        effects:["💖","🥂","💍","✨"]
    },

    christmas:{
        title:"🎄 Merry Christmas",
        gift:"🎄",
        animation:"tree",
        background:"christmas-bg",
        effects:["🎄","🎅","❄️","⭐"]
    },

    newyear:{
        title:"🎆 Happy New Year",
        gift:"🎆",
        animation:"fireworks",
        background:"newyear-bg",
        effects:["🎆","🎇","🥂","✨"]
    },

    surprise:{
        title:"🎁 Surprise",
        gift:"🎁",
        animation:"gift",
        background:"surprise-bg",
        effects:["🎁","✨","🎊","💝"]
    }

};
// ===============================
// Theme Effects
// ===============================

let floatingIcons = ["❤","💖","✨"];

let currentTheme = "simple";

const themeEffects = {

simple:["🤍","✨","🌿"],

birthday:["🎈","🎂","🎉","✨"],

love:["❤️","🌹","💖","💕"],

proposal:["💍","🌹","❤️","✨"],

sorry:["🥺","💔","🌧","🕊"],

friendship:["🤝","☕","💙","✨"],

mother:["🌸","💐","🦋","❤️"],

father:["👔","💙","⭐","🛡"],

eid:["🌙","⭐","🕌","✨"],

ramadan:["🏮","🌙","⭐","✨"],

valentine:["❤️","🌹","🧸","💝"],

anniversary:["🥂","💍","❤️","✨"],

christmas:["🎄","❄️","⭐","🎁"],

newyear:["🎆","🎇","🥂","✨"]

};
// Password Check
function checkPassword() {

    const input = document.getElementById("password").value.trim();

    if (input === websitePassword) {

        const loading = document.getElementById("loading-screen");
        const progress = document.querySelector(".progress");

        loading.style.display = "flex";

        let width = 0;

        const loader = setInterval(() => {

            width += 2;
            progress.style.width = width + "%";

            if (width >= 100) {

                clearInterval(loader);

                loading.style.display = "none";
   sessionStorage.setItem("ownerMode", "true");
window.location.href = "home.html";
            }

        }, 50);

    } else {

        alert("Oops! Wrong Password 💔");

        document.querySelector(".container").animate([
            { transform: "translateX(-8px)" },
            { transform: "translateX(8px)" },
            { transform: "translateX(-8px)" },
            { transform: "translateX(8px)" },
            { transform: "translateX(0px)" }
        ], {
            duration: 400
        });

    }

}

// ===============================
// Music
// ===============================

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

if (musicBtn && bgMusic) {

    musicBtn.addEventListener("click", () => {

        if (bgMusic.paused) {

            bgMusic.play();
            musicBtn.innerHTML = "⏸ Pause Music";

        } else {

            bgMusic.pause();
            musicBtn.innerHTML = "🎵 Play Music";

        }

    });

}
// ===============================
// Intro Screen
// ===============================

const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");

if (intro && startBtn) {

    startBtn.onclick = function () {
        intro.style.display = "none";
    };

}
const isWriteLetterPage =
document.getElementById("letterType") !== null;

const isHomePage =
document.body.classList.contains("home-page");

const isPasswordPage =
document.body.classList.contains("password-page");

let lastHeart = 0;
document.addEventListener("mousemove", (e) => {
if (Date.now() - lastHeart < 18) return;

lastHeart=Date.now();

    const heart = document.createElement("div");

    heart.className = "cursor-heart";

    let icons;

    if (isPasswordPage || isHomePage) {

        icons = ["❤️"];

    } else if (isWriteLetterPage) {

        icons =
            themeEffects[currentTheme] ||
            themeEffects.simple;

    } else {

        icons = ["❤️"];

    }

    heart.textContent =
        icons[Math.floor(Math.random()*icons.length)];

   heart.style.left = e.pageX + "px";
heart.style.top = e.pageY + "px";
heart.style.transform =
`translate(-50%,-50%) rotate(${Math.random()*40-20}deg)`;
heart.style.fontSize = (14 + Math.random() * 6) + "px";// Small hearts

heart.style.color = [
    "#ffd6e7",
    "#ffc2d9",
    "#ffe6f0",
    "#fff0f6",
    "#ffb6c1"
][Math.floor(Math.random()*5)];

heart.style.opacity = "0.85";

document.body.appendChild(heart);
setTimeout(() => {
    heart.remove();
},1500);

});
// ===============================
// Floating Icons
// ===============================

const heartsContainer =
isWriteLetterPage
? document.getElementById("floating-hearts")
: null;
if (heartsContainer) {

    function createFloatingIcon() {

        const icon = document.createElement("div");

        icon.className = "heart";

        const icons = themeEffects[currentTheme] || themeEffects.simple;

icon.innerHTML =
icons[Math.floor(Math.random() * icons.length)];

        icon.style.left = Math.random() * 100 + "vw";

        icon.style.fontSize = (18 + Math.random() * 22) + "px";

        icon.style.animationDuration =
            (4 + Math.random() * 3) + "s";

        heartsContainer.appendChild(icon);

        setTimeout(() => {

            icon.remove();

        }, 7000);

    }

   setInterval(createFloatingIcon,600);

}
// ==========================
// Welcome Popup
// ==========================
const welcomePopup = document.getElementById("welcome-popup");

if (welcomePopup) {

    if (!isOwner) {

        welcomePopup.style.display = "none";

    }

}
const continueBtn = document.getElementById("continueBtn");

if (continueBtn) {

    continueBtn.onclick = function () {

        document.getElementById("welcome-popup").style.display = "none";

    };

}
const confetti =
isWriteLetterPage
? document.getElementById("confetti")
: null;

// Function
function createConfetti(){

    if(!confetti) return;

    if(
        ![
            "birthday",
            "proposal",
            "love",
            "sorry",
            "friendship",
            "mother",
            "father",
            "ramadan",
            "eid",
            "christmas",
            "newyear",
            "valentine",
            "anniversary"
        ].includes(currentTheme)
    ){
        return;
    }

    const piece = document.createElement("div");

    piece.className = "confetti";

    const items =
    themeEffects[currentTheme] || themeEffects.simple;

    piece.innerHTML =
    items[Math.floor(Math.random()*items.length)];

    piece.style.left =
    Math.random()*100 + "vw";

    piece.style.animationDuration =
    (4 + Math.random()*3) + "s";

    confetti.appendChild(piece);

    setTimeout(()=>{

        piece.remove();

    },7000);

}

// Auto animation
if(confetti){

    setInterval(createConfetti,600);

}
// ==========================
// Birthday Typewriter Letter
// ==========================
/*
const typingText = document.getElementById("typingText");

if (typingText) {

const birthdayMessage =
"Happy Birthday! 🎂 May your day be filled with happiness, laughter, beautiful memories, and endless blessings. May every dream you have come true, and may every new year bring more success, love, and peace into your life. 💖✨";

    let i = 0;

    function typeLetter() {

        if (i < birthdayMessage.length) {

            typingText.innerHTML += birthdayMessage.charAt(i)

            i++;

            setTimeout(typeLetter, 40);

        }

    }

    typeLetter();

}
*/
// ==========================
// Birthday Cake
// ==========================

const cake = document.getElementById("cake");
const wishMessage = document.getElementById("wishMessage");
const cakeEffect = document.getElementById("cakeEffect");

if (cake) {

    cake.onclick = function () {

        cake.classList.add("cut");

        cake.innerHTML = "🍰";

        wishMessage.innerHTML =
        "🎉 Happy Birthday! Make a Wish! ✨";

        if (cakeEffect) {
            cakeEffect.innerHTML = "🎊 🎈 ✨ 🎁 ❤️";
        }

        setTimeout(() => {

            cake.classList.remove("cut");

        }, 800);

    };

}
// ==========================
// Proposal Flower
// ==========================

const flower = document.getElementById("flower");

const flowerText = document.getElementById("flowerText");

const proposalBox =
document.getElementById("proposalBox");

if (flower && flowerText) {

    flower.onclick = function () {

        flower.innerHTML = "💐";
        flower.style.transform = "scale(1.2)";
        flowerText.innerHTML = "💍 A Surprise For You";

        if (proposalBox) {
            proposalBox.style.display = "none";
        }

        const proposalFlower =
            document.getElementById("proposalFlower");

        if (proposalFlower) {
            proposalFlower.style.display = "block";
        }

    };

}

// ==========================
// Smooth Page Transition
// ==========================

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e){

        const href = this.getAttribute("href");

        if (
    href &&
    !href.startsWith("#") &&
    !href.startsWith("javascript:")
) {

            e.preventDefault();

            document.body.classList.add("fade-out");

            setTimeout(()=>{

                window.location.href = href;

            },500);

        }

    });

});
// ==========================
// Gallery Slider
// ==========================

const slider = document.getElementById("sliderImage");

const images = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic5.jpg",
    "images/pic6.jpg"
].filter(Boolean);
let current = 0;

if (slider && images.length > 0) {

    setInterval(() => {
        current = (current + 1) % images.length;
        slider.src = images[current];
    }, 3000);

}
// ==========================
// Previous / Next Buttons
// ==========================

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (slider && prevBtn && nextBtn) {

    prevBtn.addEventListener("click", () => {
        current = (current - 1 + images.length) % images.length;
        slider.src = images[current];
    });

    nextBtn.addEventListener("click", () => {
        current = (current + 1) % images.length;
        slider.src = images[current];
    });

}
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

if (slider && lightbox && lightboxImg) {

    slider.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = slider.src;
    });

}

closeLightbox?.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
// ======================================
// LETTERS PAGE ANIMATION
// ======================================

const letterCards = document.querySelectorAll(".letter-card");

if (letterCards.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.2
    });

    letterCards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = `all .7s ease ${index * 0.15}s`;

        observer.observe(card);

    });

}

// ======================================
// FINAL LETTER GLOW
// ======================================

const finalLetter = document.querySelector(".final-letter");

if (finalLetter) {

    setInterval(() => {

        finalLetter.animate([
            {
                boxShadow: "0 0 15px rgba(255,105,180,.25)"
            },
            {
                boxShadow: "0 0 35px rgba(255,105,180,.45)"
            },
            {
                boxShadow: "0 0 15px rgba(255,105,180,.25)"
            }
        ], {
            duration: 2200
        });

    }, 2200);

}

// ======================================
// LETTER CARD HOVER SOUND (OPTIONAL)
// ======================================

letterCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});
/* ======================================
   Create Your Own Letter page
====================================== */

const letterMessage = document.getElementById("message");
const nameInput = document.getElementById("name");

const titleInput = document.getElementById("title");

const previewName = document.getElementById("previewName");

const previewTitle = document.getElementById("previewTitle");

const previewMessage = document.getElementById("previewMessage");
const counter = document.getElementById("count");
const saveBtn = document.getElementById("saveBtn");
const deleteBtn = document.getElementById("deleteBtn");
if(letterMessage && counter){

    counter.innerHTML = letterMessage.value.length + " / 2000";

   letterMessage.addEventListener("input",()=>{

function updatePreview(){

if(previewTitle){

previewTitle.innerHTML =
titleInput.value || "Your Letter Title";

}

if(previewName){

previewName.innerHTML =
"From: " + (nameInput.value || "Your Name");

}

if(previewMessage){

previewMessage.innerHTML =
letterMessage.value ||
"Start typing your beautiful letter...";

}

counter.innerHTML =
letterMessage.value.length + " / 2000";

}

nameInput?.addEventListener("input", updatePreview);

titleInput?.addEventListener("input", updatePreview);

letterMessage?.addEventListener("input", updatePreview);

updatePreview();

counter.innerHTML =
letterMessage.value.length + " / 2000";

});

}

if(saveBtn){

    // Load Saved Data
    document.getElementById("name").value =
    localStorage.getItem("letterName") || "";

    document.getElementById("title").value =
    localStorage.getItem("letterTitle") || "";

    letterMessage.value =
localStorage.getItem("letterMessage") || "";

counter.innerHTML =
letterMessage.value.length + " / 2000";
    saveBtn.addEventListener("click",()=>{

        localStorage.setItem(
            "letterName",
            document.getElementById("name").value
        );

        localStorage.setItem(
            "letterTitle",
            document.getElementById("title").value
        );

        localStorage.setItem(
            "letterMessage",
            document.getElementById("message").value
        );
// Save into Memory Box

const letters =
JSON.parse(localStorage.getItem("memoryLetters")) || [];

letters.unshift({

name:nameInput.value,

title:titleInput.value,

message:letterMessage.value,

date:new Date().toLocaleDateString(),

favorite:false

});

localStorage.setItem(
"memoryLetters",
JSON.stringify(letters)
);
        alert("💖 Letter Saved Successfully!");

    });

// ===============================
// Auto Save Draft
// ===============================

function autoSaveDraft(){

localStorage.setItem("letterName", nameInput.value);

localStorage.setItem("letterTitle", titleInput.value);

localStorage.setItem("letterMessage", letterMessage.value);

}

nameInput?.addEventListener("input", autoSaveDraft);

titleInput?.addEventListener("input", autoSaveDraft);

letterMessage?.addEventListener("input", autoSaveDraft);
}

if(deleteBtn){

    deleteBtn.addEventListener("click",()=>{

        if(confirm("Delete your saved letter?")){

            localStorage.removeItem("letterName");
            localStorage.removeItem("letterTitle");
            localStorage.removeItem("letterMessage");

            document.getElementById("name").value="";
            document.getElementById("title").value="";
            document.getElementById("message").value="";

counter.innerHTML = "0 / 2000";
            alert("🗑 Letter Deleted!");

        }

    });

}
const photo = document.getElementById("photo");
const preview = document.getElementById("preview");


if (photo && preview) {
    photo.addEventListener("change", function () {

        const file = this.files[0];

        if (file) {

            preview.src = URL.createObjectURL(file);
            preview.style.display = "block";

        } else {

            preview.style.display = "none";

        }

    });
}
// ===============================
// Letter Theme
// ===============================

const letterType = document.getElementById("letterType");

function applyTheme(type) {

    // Remove old theme classes
    document.body.classList.remove(
        "simple",
        "love",
        "sorry",
        "proposal",
        "birthday",
        "friendship",
        "mother",
        "father",
        "eid",
        "ramadan",
        "valentine",
        "anniversary",
        "christmas",
        "newyear"
    );

    // Add new theme
    document.body.classList.add(type);

    currentTheme = type;
    floatingIcons = themeEffects[type] || themeEffects.simple;

    // Remove old effects
    document.querySelectorAll(
        ".heart,.confetti,.firework,.balloon,.cursor-heart"
    ).forEach(el => el.remove());

    // Birthday Cake
const cakeContainer = document.querySelector(".cake-container");

if (cakeContainer) {
    cakeContainer.style.display =
        (type === "birthday")
            ? "block"
            : "none";
}
    // Gift
    const gift = document.getElementById("giftContainer");
    if (gift) {
        gift.style.display =
            (type === "birthday" || type === "proposal")
                ? "block"
                : "none";
    }

    // Proposal Box
    const proposal = document.getElementById("proposalBox");
    if (proposal) {
        proposal.style.display =
            type === "proposal"
                ? "block"
                : "none";
    }

    // Proposal Flower
    const proposalFlower =
        document.getElementById("proposalFlower");

    if (proposalFlower) {
        proposalFlower.style.display =
            type === "proposal"
                ? "block"
                : "none";
    }
    const templates = {

love:{
title:"My Love ❤️",
message:"Every heartbeat reminds me of you. You are the most beautiful part of my life."
},

sorry:{
title:"I'm Sorry 💙",
message:"I know I made mistakes. Please forgive me because you mean everything to me."
},

birthday:{
title:"Happy Birthday 🎂",
message:"May your life always be filled with happiness, success, laughter and endless blessings."
},

proposal:{
title:"Will You Marry Me? 💍",
message:"From the very first day I knew you were special. I want to spend my whole life with you."
},

friendship:{
title:"Best Friend 🌻",
message:"True friendship never fades. Thank you for always being with me."
},

mother:{
title:"Dear Mom ❤️",
message:"Thank you for every sacrifice you made for me. I love you forever."
},

father:{
title:"Dear Dad 💙",
message:"Your strength, guidance and love have always inspired me."
},

eid:{
title:"Eid Mubarak 🌙",
message:"May Allah accept all your prayers and fill your life with happiness."
},

ramadan:{
title:"Ramadan Mubarak 🕌",
message:"May Allah shower His endless mercy and blessings upon you."
},

valentine:{
title:"Happy Valentine's Day ❤️",
message:"Every love story is beautiful, but ours is my favourite."
},

anniversary:{
title:"Happy Anniversary 💍",
message:"Every year with you is another beautiful chapter of our love story."
},

christmas:{
title:"Merry Christmas 🎄",
message:"May your Christmas sparkle with joy, love and peace."
},

newyear:{
title:"Happy New Year 🎆",
message:"May this new year bring happiness, success and beautiful memories."

}

};

if(letterMessage && templates[type]){

document.getElementById("title").value =
templates[type].title;

letterMessage.value =
templates[type].message;

counter.innerHTML =
letterMessage.value.length + " / 2000";

}
    const data = themeData[type];

if(data){

    const themeTitle = document.getElementById("themeTitle");
    const themeSubtitle = document.getElementById("themeSubtitle");
    const themeIcon = document.getElementById("themeIcon");
    const themeMessage = document.getElementById("themeMessage");

    if(themeTitle) themeTitle.innerHTML = data.title;
    if(themeSubtitle) themeSubtitle.innerHTML = "Write your feelings from your heart ❤️";
    // Change Theme Icon Animation

if(themeIcon){

    themeIcon.className = "theme-icon";

    switch(data.animation){

    case "cake":
        themeIcon.innerHTML = "🎂";
        themeIcon.classList.add("cake-animation");
        break;

    case "rose":
        themeIcon.innerHTML = "🌹";
        themeIcon.classList.add("rose-animation");
        break;

    case "ring":
        themeIcon.innerHTML = "💍";
        themeIcon.classList.add("ring-animation");
        break;

    case "broken-heart":
        themeIcon.innerHTML = "💔";
        themeIcon.classList.add("heart-animation");
        break;

    case "coffee":
        themeIcon.innerHTML = "☕";
        themeIcon.classList.add("coffee-animation");
        break;
case "flowers":
    themeIcon.innerHTML="💐";
    themeIcon.classList.add("flowers-animation");
    break;

case "tie":
    themeIcon.innerHTML="👔";
    themeIcon.classList.add("tie-animation");
    break;

case "moon":
    themeIcon.innerHTML="🌙";
    themeIcon.classList.add("moon-animation");
    break;

case "lantern":
    themeIcon.innerHTML="🏮";
    themeIcon.classList.add("lantern-animation");
    break;

case "teddy":
    themeIcon.innerHTML="🧸";
    themeIcon.classList.add("teddy-animation");
    break;

case "couple":
    themeIcon.innerHTML="🥂";
    themeIcon.classList.add("couple-animation");
    break;

case "tree":
    themeIcon.innerHTML="🎄";
    themeIcon.classList.add("tree-animation");
    break;

case "fireworks":
    themeIcon.innerHTML="🎆";
    themeIcon.classList.add("fireworks-animation");
    break;
        
    default:
        themeIcon.innerHTML = "💌";
 }

    }

    if(themeMessage){
        themeMessage.innerHTML = data.title;
    }

} 
localStorage.setItem("selectedTheme", type);
}
if (letterType) {

    const savedTheme =
        localStorage.getItem("selectedTheme");

    if (savedTheme) {

        letterType.value = savedTheme;
        applyTheme(savedTheme);

    } else {

        applyTheme(letterType.value);

    }

    letterType.addEventListener("change", function () {

        applyTheme(this.value);

    });

}

// ===============================
// Copy Letter
// ===============================

document.querySelectorAll(".copy-btn").forEach(btn=>{

btn.addEventListener("click",function(){

const text=this.previousElementSibling.innerText;

if (navigator.clipboard) {

    navigator.clipboard.writeText(text);

} else {

    const textarea =
        document.createElement("textarea");

    textarea.value = text;

    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand("copy");

    textarea.remove();

}

this.innerHTML="✅ Copied!";

setTimeout(()=>{

this.innerHTML="📋 Copy Letter";

},2000);

});

});
// ===============================
// Proposal Page
// ===============================

const proposalPhoto = document.getElementById("proposalPhoto");
const proposalPreview = document.getElementById("proposalPreview");

if (proposalPhoto && proposalPreview) {

    proposalPhoto.addEventListener("change", function () {

        const file = this.files[0];

        if (file) {

            proposalPreview.src = URL.createObjectURL(file);
            proposalPreview.style.display = "block";

        }

    });

}

const proposalGift = document.getElementById("proposalGift");
const proposalGiftMessage = document.getElementById("proposalGiftMessage");

if (proposalGift && proposalGiftMessage) {

    proposalGift.addEventListener("click", function () {

        proposalGift.innerHTML = "💝";

        proposalGiftMessage.style.display = "block";

        proposalGiftMessage.innerHTML =
        "❤️ Every love story begins with one beautiful question.";

    });

}

const proposalFlower = document.getElementById("proposalFlower");
const proposalRing = document.getElementById("proposalRing");
const proposalText = document.getElementById("proposalText");

if (proposalFlower && proposalRing && proposalText) {

    proposalFlower.addEventListener("click", function () {

        proposalFlower.innerHTML = "💐";

        proposalRing.style.display = "block";

        proposalText.style.display = "block";

    });

}
const saveProposal = document.getElementById("saveProposal");
const proposalMessage =
document.getElementById("proposalMessage");

if (proposalMessage) {

    proposalMessage.value =
        localStorage.getItem("proposalMessage") || "";

}
window.onerror = function (
    message,
    source,
    line,
    column,
    error
) {

    console.error(
        "JS Error:",
        message,
        "Line:",
        line
    );

};
const pdfBtn = document.getElementById("pdfBtn");
const imageBtn = document.getElementById("imageBtn");

if(pdfBtn){

pdfBtn.addEventListener("click",()=>{

const { jsPDF } = window.jspdf;

const doc = new jsPDF();

const name =
document.getElementById("name").value;

const title =
document.getElementById("title").value;

const message =
document.getElementById("message").value;

doc.setFontSize(22);
doc.text(title || "Letter",20,20);

doc.setFontSize(14);
doc.text("From: " + (name || "Anonymous"),20,35);

doc.setFontSize(12);

const lines =
doc.splitTextToSize(message,170);

doc.text(lines,20,50);

doc.save("Letter.pdf");

});

}
if(imageBtn){

imageBtn.addEventListener("click",()=>{

const preview =
document.querySelector(".preview-card");

html2canvas(preview,{
backgroundColor:null,
scale:2
}).then(canvas=>{

const link=document.createElement("a");

link.download="Letter.png";

link.href=canvas.toDataURL("image/png");

link.click();

});

});

}

// ===============================
// Recent Letters on Home Page
// ===============================

const recentLettersContainer = document.getElementById("recentLettersContainer");

if (recentLettersContainer) {
    const letters = JSON.parse(localStorage.getItem("memoryLetters")) || [];
    
    if (letters.length === 0) {
        recentLettersContainer.innerHTML = "<p>No letters created yet. Start by creating your first letter! ✨</p>";
    } else {
        // Show only the 5 most recent letters
        const recentLetters = letters.slice(0, 5);
        
        recentLettersContainer.innerHTML = recentLetters.map(letter => `
            <div class="recent-letter-card">
                <div class="recent-letter-header">
                    <span class="recent-emoji">${letter.category ? getCategoryEmoji(letter.category) : '💌'}</span>
                    <h4>${letter.title || "Untitled Letter"}</h4>
                </div>
                <p class="recent-preview">${letter.message ? letter.message.substring(0, 100) + '...' : 'No preview available'}</p>
                <div class="recent-meta">
                    <small>📅 ${letter.date || ''}</small>
                    <small>For: ${letter.name || 'Someone special'}</small>
                </div>
                <div class="recent-actions">
                    <button onclick="previewLetter('${letter.id || 'temp'}')" class="action-btn">👁 Preview</button>
                    <button onclick="copyLetterText('${letter.id || 'temp'}')" class="action-btn">📋 Copy</button>
                </div>
            </div>
        `).join('');
    }
}

// Helper function to get category emoji
function getCategoryEmoji(category) {
    const emojis = {
        birthday: '🎂',
        love: '❤️',
        apology: '🥺',
        proposal: '💍',
        anniversary: '💞',
        friendship: '🤝',
        eid: '🌙',
        christmas: '🎄',
        mothersday: '🌸',
        fathersday: '👔',
        graduation: '🎓',
        thankyou: '🙏',
        romantic: '🌹',
        cute: '🧸',
        missing: '💭',
        longdistance: '🌍',
        special: '✨',
        newyear: '🎆',
        getwell: '💐',
        goodluck: '🍀'
    };
    return emojis[category] || '💌';
}

// Preview letter function
function previewLetter(id) {
    alert("Preview functionality - opens the full letter view 💌");
}

// Copy letter text function
function copyLetterText(id) {
    const letters = JSON.parse(localStorage.getItem("memoryLetters")) || [];
    const letter = letters.find(l => l.id === id) || letters[0];
    
    if (letter) {
        const textToCopy = `${letter.title}\n\n${letter.message}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            showToast("Letter copied successfully! 💌");
        }).catch(() => {
            showToast("Letter copied! 💌");
        });
    }
}
// ===============================
// Memory Box
// ===============================

const memoryList = document.getElementById("memoryList");

if (memoryList) {

    let letters = JSON.parse(
        localStorage.getItem("memoryLetters")
    ) || [];

    const searchInput =
        document.getElementById("searchLetters");

    function renderLetters(filter = "") {

        memoryList.innerHTML = "";

        const filtered = letters.filter(letter => {

            const text =
                (
                    (letter.title || "") +
                    " " +
                    (letter.message || "") +
                    " " +
                    (letter.name || "")
                ).toLowerCase();

            return text.includes(filter.toLowerCase());

        });

        if (!filtered.length) {

            memoryList.innerHTML =
            "<p>No letters found 💌</p>";

            return;

        }

        filtered.forEach((letter,index)=>{

            memoryList.innerHTML += `

<div class="memory-card">

<div class="memory-top">

<h3>${letter.title}</h3>

<button
class="favoriteBtn"
data-index="${index}">

${letter.favorite ? "⭐" : "☆"}

</button>

</div>

<p>

${letter.message.substring(0,120)}...

</p>

<small>

📅 ${letter.date || ""}

</small>

<button
class="readBtn"
data-index="${index}">

👁 Read


</button>
<button
class="deleteBtn"
data-index="${index}">

🗑 Delete

</button>

</div>

`;

        });

    }
function attachEvents(){

document.querySelectorAll(".favoriteBtn").forEach(btn=>{

btn.onclick=function(){

const i=this.dataset.index;

letters[i].favorite=!letters[i].favorite;

localStorage.setItem(
"memoryLetters",
JSON.stringify(letters)
);

renderLetters(searchInput ? searchInput.value : "");
attachEvents();

};

});

document.querySelectorAll(".readBtn").forEach(btn=>{

btn.onclick=function(){

const i=this.dataset.index;

document.getElementById("popupTitle").innerHTML =
letters[i].title;

document.getElementById("popupName").innerHTML =
"From: " + (letters[i].name || "Anonymous");

document.getElementById("popupMessage").innerHTML =
letters[i].message;

const popup = document.getElementById("letterPopup");
popup.style.display = "flex";
console.log("Popup Open");

};

});

document.querySelectorAll(".readBtn").forEach(btn=>{

btn.onclick=function(){

const i=this.dataset.index;

document.getElementById("popupTitle").innerHTML =
letters[i].title;

document.getElementById("popupName").innerHTML =
"From: " + (letters[i].name || "Anonymous");

document.getElementById("popupMessage").innerHTML =
letters[i].message;

const popup = document.getElementById("letterPopup");
popup.style.display = "flex";
console.log("Popup Open");

};

});
    document.querySelectorAll(".deleteBtn").forEach(btn=>{

btn.onclick=function(){

const i=this.dataset.index;

if(confirm("Delete this letter? 💔")){

letters.splice(i,1);

localStorage.setItem(
"memoryLetters",
JSON.stringify(letters)
);

renderLetters(
searchInput ? searchInput.value : ""
);

attachEvents();

}

};

});
}
    renderLetters();
attachEvents();

if(searchInput){

searchInput.addEventListener("input",()=>{

renderLetters(searchInput.value);
attachEvents();

});

}
    }
  
const closePopup = document.getElementById("closePopup");

if (closePopup) {

    closePopup.onclick = function () {

        document.getElementById("letterPopup").style.display = "none";

    };

}
window.addEventListener("load", () => {

const closePopup = document.getElementById("closePopup");

if(closePopup){

closePopup.onclick = function(){

document.getElementById("letterPopup").style.display = "none";

};

}

});
// ===============================
// Dark / Light Mode
// ===============================

const themeToggle = document.getElementById("themeToggle");

if(themeToggle){

    if(localStorage.getItem("theme") === "dark"){

        document.body.classList.add("dark-mode");
       themeToggle.innerHTML = "☀️";

    }

    themeToggle.addEventListener("click",()=>{

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            localStorage.setItem("theme","dark");
            themeToggle.innerHTML = "☀️";

        }else{

            localStorage.setItem("theme","light");
           themeToggle.innerHTML = "🌙";

        }

    });

}
// ===============================
// Birthday Letter Edit
// ===============================
const typingText = document.getElementById("typingText");
const editBirthdayBtn = document.getElementById("editBirthdayBtn");
const saveBirthdayBtn = document.getElementById("saveBirthdayBtn");
const resetBirthdayBtn = document.getElementById("resetBirthdayBtn");

if (
editBirthdayBtn &&
saveBirthdayBtn &&
resetBirthdayBtn &&
typingText
){

const defaultLetter = `Happy Birthday! 🎂

May your life always be filled with happiness, success, love and beautiful memories.

Stay blessed and keep smiling forever. 💖`;

typingText.innerText =
localStorage.getItem("birthdayLetter") || defaultLetter;

editBirthdayBtn.onclick = function(){

typingText.contentEditable = "true";

typingText.focus();

typingText.style.border = "2px dashed #ff4081";
typingText.style.padding = "10px";

saveBirthdayBtn.style.display = "inline-block";
resetBirthdayBtn.style.display = "inline-block";

};

saveBirthdayBtn.onclick = function(){

typingText.contentEditable = "false";

typingText.style.border = "none";

localStorage.setItem(
"birthdayLetter",
typingText.innerText
);

alert("✅ Birthday Letter Saved!");
saveBirthdayBtn.style.display = "none";
resetBirthdayBtn.style.display = "none";

typingText.style.padding = "0";
};

resetBirthdayBtn.onclick = function(){

typingText.innerText = defaultLetter;

typingText.contentEditable = "false";

typingText.style.border = "none";

localStorage.removeItem("birthdayLetter");

alert("↺ Default Letter Restored!");
saveBirthdayBtn.style.display = "none";
resetBirthdayBtn.style.display = "none";

typingText.style.padding = "0";
};

}
// ===============================
// Birthday Photo
// ===============================

const birthdayPhoto =
document.getElementById("birthdayPhoto");
const changeBirthdayPhoto =
document.getElementById("changeBirthdayPhoto");

const birthdayPreview =
document.getElementById("birthdayPreview");
const deleteBirthdayPhoto =
document.getElementById("deleteBirthdayPhoto");

if(birthdayPhoto && birthdayPreview){

const savedImage =
localStorage.getItem("birthdayPhoto");

if(savedImage){

birthdayPreview.src = savedImage;
birthdayPreview.style.display = "block";

}
if(changeBirthdayPhoto){

changeBirthdayPhoto.onclick=function(){

birthdayPhoto.click();

};

}
birthdayPhoto.onchange = function(){

const file = this.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload = function(e){

birthdayPreview.src = e.target.result;

birthdayPreview.style.display = "block";
deleteBirthdayPhoto.style.display="inline-block";
localStorage.setItem(
"birthdayPhoto",
e.target.result
);

};

reader.readAsDataURL(file);

};

}
if(deleteBirthdayPhoto && birthdayPreview && birthdayPhoto){

if(localStorage.getItem("birthdayPhoto")){

deleteBirthdayPhoto.style.display="inline-block";

}

deleteBirthdayPhoto.onclick = function(){

localStorage.removeItem("birthdayPhoto");

birthdayPreview.src = "";
birthdayPreview.style.display = "none";

birthdayPhoto.value = "";

deleteBirthdayPhoto.style.display = "none";

};
}
// ===============================
// Universal Visitor Popup
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    if (isOwner) return;

    if (document.body.classList.contains("home-page")) return;

    if (!document.getElementById("visitorPopup")) {

        document.body.insertAdjacentHTML("beforeend", `

<div id="visitorPopup" class="visitor-popup">

<h3>❤️ Like this card?</h3>

<p>Create your own beautiful letter now.</p>

<button id="createLetterBtn">
✨ Create Your Own
</button>

<button id="backHomeBtn">
🏠 Back Home
</button>

</div>

`);

        document.getElementById("createLetterBtn").onclick = () => {

    window.location.href = "home.html";

        };

        document.getElementById("backHomeBtn").onclick = () => {

            window.location.href = "home.html";

        };

    }

});
// ===============================
// Universal Share System
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Create Popup Automatically
    if (!document.getElementById("sharePopup")) {

        document.body.insertAdjacentHTML("beforeend", `
        <div id="sharePopup" class="share-popup">

            <div class="share-box">

                <h2>📤 Share This Page</h2>

                <button class="shareOption" data-type="whatsapp">💚 WhatsApp</button>

                <button class="shareOption" data-type="facebook">💙 Facebook</button>

                <button class="shareOption" data-type="twitter">🖤 X</button>

                <button class="shareOption" data-type="telegram">📩 Telegram</button>

                <button class="shareOption" data-type="copy">📋 Copy Link</button>

                <button id="closeShare">❌ Close</button>

            </div>

        </div>
        `);

    }

    const shareBtn = document.querySelector(".shareBtn");
    const sharePopup = document.getElementById("sharePopup");
    const closeShare = document.getElementById("closeShare");

    if (!shareBtn) return;

    shareBtn.onclick = () => {
        sharePopup.style.display = "flex";
    };

    closeShare.onclick = () => {
        sharePopup.style.display = "none";
    };

    document.querySelectorAll(".shareOption").forEach(btn => {

        btn.onclick = function () {

            let text = "💌 Letters to Laiba ❤️";

            if(document.body.classList.contains("birthday-page")){
                text = "🎂 Happy Birthday ❤️";
            }

            if(document.body.classList.contains("proposal-page")){
                text = "💍 Will You Marry Me? ❤️";
            }

            if(document.body.classList.contains("love-page")){
                text = "💖 Love Letter ❤️";
            }

            if(document.body.classList.contains("sorry-page")){
                text = "🥺 I'm Sorry ❤️";
            }

          const shareUrl = window.location.origin +
window.location.pathname + "?surprise=true";

const url = encodeURIComponent(shareUrl);
            const msg = encodeURIComponent(text);

            switch(this.dataset.type){

                case "whatsapp":
                    window.open(`https://wa.me/?text=${msg}%20${url}`,"_blank");
                    break;

                case "facebook":
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`,"_blank");
                    break;

                case "twitter":
                    window.open(`https://twitter.com/intent/tweet?text=${msg}&url=${url}`,"_blank");
                    break;

                case "telegram":
                    window.open(`https://t.me/share/url?url=${url}&text=${msg}`,"_blank");
                    break;

                case "copy":

    navigator.clipboard.writeText(shareUrl);

    alert("✅ Visitor Link Copied!");

    break;

            }

        };

    });

});
/*// ===============================
// Birthday Intro Countdown
// ===============================
    
const countNumber = document.getElementById("countNumber");
const introText = document.getElementById("introText");

if (birthdayIntro && countNumber && introText) {

    let count = 3;

    const timer = setInterval(() => {

        count--;

        if (count > 0) {

            countNumber.textContent = count;

        } else {

            clearInterval(timer);

            countNumber.textContent = "🎉";
            introText.textContent = "Happy Birthday ❤️";

            setTimeout(() => {

                birthdayIntro.style.opacity = "0";
                birthdayIntro.style.pointerEvents = "none";

                setTimeout(() => {

                    birthdayIntro.remove();

                }, 1000);

            }, 1500);

        }

    }, 1000);

}   
*/
document.addEventListener("DOMContentLoaded", () => {

    const previewBirthdayBtn = document.getElementById("previewBirthdayBtn");

    if (!previewBirthdayBtn) return;

    previewBirthdayBtn.addEventListener("click", () => {
        const birthdayIntro = document.getElementById("birthdayIntro");
        const countNumber = document.getElementById("countNumber");
        const introText = document.getElementById("introText");

        if (!birthdayIntro || !countNumber || !introText) return;

        birthdayIntro.style.display = "flex";
        birthdayIntro.style.opacity = "1";
        birthdayIntro.style.pointerEvents = "all";

        let count = 3;
        countNumber.textContent = count;
        introText.textContent = "🎂 A Special Surprise Is Waiting...";

        const timer = setInterval(() => {

            count--;

            if (count > 0) {

                countNumber.textContent = count;

            } else {

                clearInterval(timer);

                countNumber.textContent = "🎉";
                introText.textContent = "Happy Birthday ❤️";

                setTimeout(() => {

                    birthdayIntro.style.opacity = "0";

                    setTimeout(() => {

                        birthdayIntro.style.display = "none";
                        birthdayIntro.style.opacity = "1";
                        

                    },1000);

                },1500);

            }

        },1000);

    });

});
document.addEventListener("DOMContentLoaded", () => {

    if (isSurprise) {

        document.getElementById("previewBirthdayBtn")?.click();

    }

});
// ===============================
// Visitor Popup
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const visitorPopup = document.getElementById("visitorPopup");

    if (!visitorPopup) return;

    if (isOwner) {

        visitorPopup.style.display = "none";

    } else {

        setTimeout(() => {

            visitorPopup.style.display = "block";

        }, 3000);

    }

});
// ===============================
// Universal Owner Controls
// ===============================

function hideForVisitors(selectors){

    if(isOwner) return;

    document.querySelectorAll(selectors).forEach(el=>{

        if(el){

            el.style.display="none";

        }

    });

}
// ===============================
// Create Your Own
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    const createLetterBtn =
    document.getElementById("createLetterBtn");

    if (!createLetterBtn) return;

    createLetterBtn.onclick = function () {

        window.location.href = "home.html";

    };

});
// ===============================
// Logout
// ===============================

function logoutOwner(){

    sessionStorage.removeItem("ownerMode");

    window.location.href="index.html";

}
// ===============================
// Logout Button Visibility
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const logoutBtn = document.getElementById("logoutBtn");

    if (!logoutBtn) return;

    if (isOwner) {

        logoutBtn.style.display = "inline-block";

    } else {

        logoutBtn.style.display = "none";

    }

});
document.addEventListener("DOMContentLoaded",()=>{

hideForVisitors(`
#editBirthdayBtn,
#saveBirthdayBtn,
#resetBirthdayBtn,
#changeBirthdayPhoto,
#deleteBirthdayPhoto,
#previewBirthdayBtn,
#giftEditor,
#saveGiftBtn,
#logoutBtn
`);

});
// ===============================
// Premium Floating Icons
// ===============================

function createFloatingIcon() {

    const container = document.getElementById("floating-hearts");

    if (!container) return;

    const icon = document.createElement("div");

    icon.className = "heart";

    icon.innerHTML =
        floatingIcons[
            Math.floor(Math.random() * floatingIcons.length)
        ];

    icon.style.position = "absolute";
    icon.style.left = Math.random() * 100 + "%";
    icon.style.bottom = "-40px";

    icon.style.fontSize =
        (18 + Math.random() * 22) + "px";

    icon.style.opacity = ".9";

    icon.style.animation =
        `floatHeart ${8 + Math.random()*5}s linear forwards`;

    container.appendChild(icon);

    setTimeout(() => {

        icon.remove();

    },13000);

}
// ===============================
// Fireworks
// ===============================

function createFirework(){

    const container =
    document.getElementById("fireworks");

    if(!container) return;

    const fire=document.createElement("div");

    fire.className="firework";

    fire.innerHTML="✨";

    fire.style.position="absolute";

    fire.style.left=Math.random()*100+"%";
    fire.style.top=Math.random()*70+"%";

    fire.style.fontSize=(20+Math.random()*40)+"px";

    fire.style.animation="floatHeart 2s ease-out forwards";

    container.appendChild(fire);

    setTimeout(()=>{

        fire.remove();

    },2000);

}
// ===============================
// Balloons
// ===============================

function createBalloon(){

    const container=
    document.getElementById("balloons");

    if(!container) return;

    const balloon=document.createElement("div");

    balloon.className="balloon";

    balloon.innerHTML="🎈";

    balloon.style.position="absolute";

    balloon.style.left=Math.random()*100+"%";

    balloon.style.bottom="-80px";

    balloon.style.fontSize=(35+Math.random()*20)+"px";

    balloon.style.animation=
    `floatHeart ${12+Math.random()*6}s linear forwards`;

    container.appendChild(balloon);

    setTimeout(()=>{

        balloon.remove();

    },18000);

}
// Floating Icons
if(document.getElementById("floating-hearts")){
    setInterval(createFloatingIcon,700);
}

// Fireworks
if(document.getElementById("fireworks")){
    setInterval(createFirework,4000);
}

// Balloons
if(document.getElementById("balloons")){
    setInterval(createBalloon,3000);
}
// ======================================
// Premium Birthday Flow
// ======================================

const welcomeScreen = document.getElementById("welcomeScreen");
const openBtn = document.getElementById("startLetter");
const questionBox = document.getElementById("questionBox");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const noMessage = document.getElementById("noMessage");

const letterContent = document.getElementById("letterContent");

const birthdayFlow = document.getElementById("birthdayFlow");
const giftStage = document.getElementById("giftStage");
const cakeStage = document.getElementById("cakeStage");

const giftBox = document.getElementById("giftBox");
const nextBirthday = document.getElementById("nextBirthday");

if(letterContent){
    letterContent.style.display="none";
}

if(questionBox){
    questionBox.style.display="none";
}

// Open Surprise

openBtn?.addEventListener("click",()=>{

    openBtn.style.display="none";
    questionBox.style.display="block";

});

// NO Button

const noTexts = [

"🥺 Please choose YES ❤️",

"😭 Don't break my heart...",

"💖 Pretty Please...",

"🥹 Only YES unlocks the surprise!",

"🌸 Come on... Press YES 😊"

];

let noIndex = 0;

noBtn?.addEventListener("mouseover",()=>{

    const x = Math.random() * (window.innerWidth - 220);
    const y = Math.random() * (window.innerHeight - 150);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

  noMessage.innerHTML = noTexts[Math.min(noIndex,noTexts.length-1)];

noMessage.style.left = "50%";
noMessage.style.top = "18%";
noMessage.style.transform = "translateX(-50%)";

noMessage.style.opacity = "1";
noMessage.style.visibility = "visible";

setTimeout(() => {
    noMessage.style.opacity = "0";
    noMessage.style.visibility = "hidden";
},1500);

noIndex++;

});
// YES Button

yesBtn?.addEventListener("click",()=>{

    welcomeScreen.style.display="none";

    letterContent.style.display="block";

    if(letterType){

        letterType.value="birthday";

        applyTheme("birthday");

    }

    birthdayFlow.style.display="block";

    giftStage.style.display="block";

    cakeStage.style.display="none";

});

// Gift

// Gift

giftBox?.addEventListener("click",()=>{

    giftBox.style.pointerEvents="none";

    giftBox.classList.add("giftOpen");

    giftBox.style.transform="scale(1.6) rotate(15deg)";

    // Confetti
    for(let i=0;i<40;i++){
        setTimeout(createConfetti,i*40);
    }

    // Balloons
    for(let i=0;i<20;i++){
        setTimeout(createBalloon,i*120);
    }

    // Fireworks
    for(let i=0;i<12;i++){
        setTimeout(createFirework,i*220);
    }

    setTimeout(()=>{

        giftStage.style.display="none";

        cakeStage.style.display="block";

        document.getElementById("wishPopup").style.display="block";

    },1200);

});
const blowBtn = document.getElementById("blowCandles");

blowBtn?.addEventListener("click",()=>{

    document.getElementById("birthdayCake").innerHTML="🎂";
document.getElementById("birthdayCake").style.animation="none";
    document.getElementById("wishPopup").style.display = "none";

    for(let i=0;i<25;i++){

        setTimeout(createFirework,i*120);

    }

    nextBirthday.style.display="inline-block";

});

// Cake

nextBirthday?.addEventListener("click",()=>{

    cakeStage.style.display="none";

    document.getElementById("themeTitle").innerHTML=
    "🎂 Happy Birthday";

    document.getElementById("themeSubtitle").innerHTML=
    "May Allah bless you always ❤️";

    document.getElementById("title").value=
    "Happy Birthday 🎂";

    document.getElementById("message").value=

`Happy Birthday! 🎂

May Allah bless you with happiness,
success,
good health,
peace
and endless smiles.

Have a beautiful day ❤️`;

    document.getElementById("message")
    .dispatchEvent(new Event("input"));

    for(let i=0;i<25;i++){

        setTimeout(createBalloon,i*150);

    }

    for(let i=0;i<35;i++){

        setTimeout(createConfetti,i*60);

    }

    for(let i=0;i<10;i++){

        setTimeout(createFirework,i*350);

    }

});
// =========================
// Letter Library - Render Functions
// =========================

let currentLibraryFilter = "all";
let showFavoritesOnly = false;

function renderLibrary() {
    const libraryGrid = document.getElementById("libraryGrid");
    const totalLettersEl = document.getElementById("totalLetters");
    const filteredLettersEl = document.getElementById("filteredLetters");
    
    if (!libraryGrid) return;
    
    // Get favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem("libraryFavorites")) || [];
    
    // Filter letters
    let filtered = letterLibraryData.filter(letter => {
        // Category filter
        if (currentLibraryFilter !== "all" && letter.category !== currentLibraryFilter) {
            return false;
        }
        // Favorites filter
        if (showFavoritesOnly && !favorites.includes(letter.id)) {
            return false;
        }
        return true;
    });
    
    // Search filter
    const searchTerm = document.getElementById("searchLibrary")?.value?.toLowerCase() || "";
    if (searchTerm) {
        filtered = filtered.filter(letter => 
            letter.title.toLowerCase().includes(searchTerm) ||
            letter.text.toLowerCase().includes(searchTerm) ||
            letter.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // Update stats
    if (totalLettersEl) {
        totalLettersEl.textContent = `📝 Total: ${letterLibraryData.length} letters`;
    }
    if (filteredLettersEl) {
        filteredLettersEl.textContent = `Showing: ${filtered.length} letters`;
    }
    
    // Render cards
    if (filtered.length === 0) {
        libraryGrid.innerHTML = "<p>No letters found. Try a different search or category! 💌</p>";
        return;
    }
    
    libraryGrid.innerHTML = filtered.map(letter => {
        const isFavorite = favorites.includes(letter.id);
        return `
<div class="library-letter-card">
    <div class="card-header">
        <span class="emoji">${letter.emoji}</span>
        <h3>${letter.title}</h3>
        <span class="category-tag">${letter.category}</span>
    </div>
    <p>${letter.text.substring(0, 150)}${letter.text.length > 150 ? '...' : ''}</p>
    <div class="library-letter-actions">
        <button class="copy-library-btn" onclick="copyLibraryLetter('${letter.id}')">📋 Copy Letter</button>
        <button class="use-library-btn" onclick="useThisLetter('${letter.id}')">✨ Use This Letter</button>
        <button class="fav-library-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite('${letter.id}')">${isFavorite ? '⭐' : '☆'}</button>
    </div>
</div>`;
    }).join('');
}

// Copy letter to clipboard
function copyLibraryLetter(id) {
    const letter = letterLibraryData.find(l => l.id === id);
    if (!letter) return;
    
    const textToCopy = `${letter.title}\n\n${letter.text}`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("Letter copied successfully! 💌");
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        showToast("Letter copied successfully! 💌");
    });
}

// Use this letter in create page
function useThisLetter(id) {
    const letter = letterLibraryData.find(l => l.id === id);
    if (!letter) return;
    
    // Store in sessionStorage for the create page to use
    sessionStorage.setItem("templateLetter", JSON.stringify({
        category: letter.category,
        title: letter.title,
        message: letter.text
    }));
    
    // Redirect to create page
    window.location.href = "write-letter.html";
}

// Toggle favorite
function toggleFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem("libraryFavorites")) || [];
    
    if (favorites.includes(id)) {
        favorites = favorites.filter(fav => fav !== id);
        showToast("Removed from favorites");
    } else {
        favorites.push(id);
        showToast("Added to favorites! ⭐");
    }
    
    localStorage.setItem("libraryFavorites", JSON.stringify(favorites));
    renderLibrary();
}

// Toast notification
function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #ff69b4, #da70d6);
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        box-shadow: 0 4px 15px rgba(255,105,180,0.4);
        z-index: 10000;
        animation: slideUp 0.3s ease;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

// ===============================
// Library Event Listeners
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    // Check if we're on library page
    const libraryGrid = document.getElementById("libraryGrid");
    if (libraryGrid) {
        // Initial render
        renderLibrary();
        
        // Search listener
        const searchInput = document.getElementById("searchLibrary");
        if (searchInput) {
            searchInput.addEventListener("input", renderLibrary);
        }
        
        // Category filter buttons
        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.addEventListener("click", function() {
                document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
                this.classList.add("active");
                currentLibraryFilter = this.dataset.category;
                renderLibrary();
            });
        });
        
        // Favorites button
        const favBtn = document.getElementById("favoritesOnly");
        if (favBtn) {
            favBtn.addEventListener("click", function() {
                showFavoritesOnly = !showFavoritesOnly;
                this.classList.toggle("active", showFavoritesOnly);
                renderLibrary();
            });
        }
    }
});

// =========================
// Countdown
// =========================
console.log("Script Started");

const countdownScreen = document.getElementById("countdownScreen");
const countNumber = document.getElementById("countNumber");

if (countdownScreen && countNumber) {

    console.log("Countdown Found");

    const welcomeScreen = document.getElementById("welcomeScreen");
    if (welcomeScreen) {
        welcomeScreen.style.display = "none";
    }

    let count = 3;

    const timer = setInterval(() => {

        console.log(count);

        countNumber.innerHTML = count;

        count--;

        if (count < 1) {

            clearInterval(timer);

            countdownScreen.style.display = "none";
            if (welcomeScreen) {
                welcomeScreen.style.display = "flex";
            }

        }

    },1000);

}

