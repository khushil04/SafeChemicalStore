<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     */
    protected $middleware = [
        // You can add global middleware here if needed
        // Example:
        // \App\Http\Middleware\TrustProxies::class,
    ];

    /**
     * The application's route middleware groups.
     */
    protected $middlewareGroups = [
        'web' => [
            \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],

        'api' => [
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class, // Sanctum for SPA auth
            \Barryvdh\Cors\HandleCors::class, // CORS middleware
            'throttle:api', // API rate limiter
            \Illuminate\Routing\Middleware\SubstituteBindings::class, // Route model binding
        ],
    ];

    /**
     * The application's route middleware.
     */
    protected $routeMiddleware = [
        // You can register route-specific middleware here if needed
        // Example:
        // 'auth' => \App\Http\Middleware\Authenticate::class,
    ];
}
