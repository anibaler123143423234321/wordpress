<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bd_wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'o,*bRn%$8%4XX7p%x1TeQZDG@fj=JW7/=%p d1nhB`^b^,C-hdDhEBx.-Z2/ +SA' );
define( 'SECURE_AUTH_KEY',  'd`+ENYx$qCFz$ V9Q>+,!{Q&];*-EI6r&oP]ZEA`O=e!{#/jc6L)m`1nK.@.eC!n' );
define( 'LOGGED_IN_KEY',    '8]-;H(XaIf|1AYhK/]WjsbZIh(aaKj]sM.<QQA:V3I|To;tPK{]:l$~%F#K0ZD1X' );
define( 'NONCE_KEY',        'DO@V(gGGF;2PLIj&5PC~KqtXwz=owY[)x3nvb$@SmwI*za;s ;HJgTQwuqLT|=1u' );
define( 'AUTH_SALT',        'FB&HYL sW#}nl+ZUz}mS^DC_M[A5tu[IlPo60U>_OFOGXE{?pZK^!a(J--NBv#E@' );
define( 'SECURE_AUTH_SALT', 't[hq+*%x?Fcmygq1mu@X^HC|tU?o;Ou,;D</UAe(;E2[sn0.^VvFpZbz]T<C6pQE' );
define( 'LOGGED_IN_SALT',   'Js2Es,4K7~Gq+tP}W4I9LARwEcY72I{g[Y5,M!|dp~16t1m9Xr*///JI).^m6^55' );
define( 'NONCE_SALT',       'X&F&`p_$nLBS5X`<tL`3;j*G9yE+y0otI$^eJa;S|(6A DxG=k^<pVI PaN%5AIu' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
