<template>
    <div class="body">
        <NavBar/>
        <main class="container">
            <slot/>
        </main>
        <Footer/>
    </div>
</template>

<style>
.body{
    min-width: 62.5rem;
    @apply bg-light-100 flex flex-col min-h-screen
}
</style>
