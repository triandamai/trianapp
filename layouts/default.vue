<template>
       <div id="__trian.app__">
        <header class="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-[40%] lg:items-start lg:overflow-y-auto xl:w-[40%]">
            <Sidebar/>
            <Hero>
                <ProfilePicture/>
                <Title/>
                <About/>
                <SocialMedia/>
            </Hero>
        </header>
        <Nuxt/>
        <Footer/>
    </div>
</template>


