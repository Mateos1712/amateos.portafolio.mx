"""Genera los recursos PNG sociales del portafolio a partir de formas simples."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"
FONT_REGULAR = Path(r"C:\Windows\Fonts\segoeui.ttf")
FONT_SEMIBOLD = Path(r"C:\Windows\Fonts\seguisb.ttf")
FONT_BOLD = Path(r"C:\Windows\Fonts\segoeuib.ttf")


def font(path: Path, size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    try:
        return ImageFont.truetype(str(path), size)
    except OSError:
        return ImageFont.load_default()


def rounded_gradient(width: int, height: int, start: tuple[int, ...], end: tuple[int, ...]) -> Image.Image:
    image = Image.new("RGBA", (width, height))
    pixels = image.load()
    for y in range(height):
        for x in range(width):
            progress = (x / max(width - 1, 1) + y / max(height - 1, 1)) / 2
            pixels[x, y] = tuple(
                int(start[channel] + (end[channel] - start[channel]) * progress)
                for channel in range(4)
            )
    return image


def draw_cloud(draw: ImageDraw.ImageDraw, origin: tuple[int, int], scale: float, color: str, width: int) -> None:
    x, y = origin
    draw.arc((x + 10 * scale, y + 27 * scale, x + 50 * scale, y + 67 * scale), 90, 270, fill=color, width=width)
    draw.arc((x + 30 * scale, y + 3 * scale, x + 95 * scale, y + 68 * scale), 180, 355, fill=color, width=width)
    draw.arc((x + 76 * scale, y + 20 * scale, x + 126 * scale, y + 70 * scale), 265, 100, fill=color, width=width)
    draw.line((x + 29 * scale, y + 67 * scale, x + 104 * scale, y + 67 * scale), fill=color, width=width)
    draw.line((x + 51 * scale, y + 55 * scale, x + 68 * scale, y + 38 * scale), fill=color, width=width)
    draw.line((x + 68 * scale, y + 38 * scale, x + 85 * scale, y + 55 * scale), fill=color, width=width)
    draw.line((x + 68 * scale, y + 39 * scale, x + 68 * scale, y + 83 * scale), fill=color, width=width)


def generate_open_graph() -> None:
    canvas = Image.new("RGBA", (1200, 630), "#07111f")
    glow = rounded_gradient(1200, 630, (7, 17, 31, 0), (22, 173, 188, 78))
    canvas = Image.alpha_composite(canvas, glow)
    draw = ImageDraw.Draw(canvas, "RGBA")

    for x in range(0, 1201, 60):
        draw.line((x, 0, x, 630), fill=(47, 72, 98, 40), width=1)
    for y in range(0, 631, 60):
        draw.line((0, y, 1200, y), fill=(47, 72, 98, 40), width=1)

    draw.rounded_rectangle((62, 58, 1138, 572), radius=34, fill=(5, 12, 22, 220), outline=(44, 80, 105, 255), width=2)
    draw.rounded_rectangle((86, 84, 270, 118), radius=17, fill=(16, 67, 72, 255), outline=(66, 211, 196, 130), width=1)
    draw.ellipse((103, 96, 113, 106), fill="#5eead4")
    draw.text((124, 91), "SYSTEMS · CLOUD", font=font(FONT_SEMIBOLD, 17), fill="#a7f3d0")

    draw.text((86, 164), "Andrés Mateos", font=font(FONT_BOLD, 68), fill="#f4f8fc")
    draw.text((86, 250), "Ingeniero en Ciencias", font=font(FONT_BOLD, 39), fill="#65e8f6")
    draw.text((86, 300), "de la Computación", font=font(FONT_BOLD, 39), fill="#65e8f6")
    draw.text((88, 357), "TITULADO · 2025", font=font(FONT_BOLD, 22), fill="#9aacbf")
    draw.text(
        (90, 409),
        "APIs  ·  Linux  ·  Docker  ·  AWS  ·  Terraform",
        font=font(FONT_SEMIBOLD, 24),
        fill="#c3d0de",
    )

    for left, right, label in (
        (88, 225, "Claridad"),
        (240, 392, "Seguridad"),
        (407, 622, "Mejora continua"),
    ):
        draw.rounded_rectangle((left, 472, right, 515), radius=21, fill=(16, 32, 50, 255), outline=(46, 75, 103, 255), width=1)
        text_box = draw.textbbox((0, 0), label, font=font(FONT_SEMIBOLD, 18))
        text_width = text_box[2] - text_box[0]
        draw.text(((left + right - text_width) / 2, 481), label, font=font(FONT_SEMIBOLD, 18), fill="#c3d0de")

    draw.rounded_rectangle((830, 148, 1056, 388), radius=34, fill=(9, 30, 43, 230), outline=(52, 178, 181, 130), width=2)
    draw_cloud(draw, (865, 209), 1.2, "#5eead4", 6)
    draw.text((865, 347), "BUILD · LEARN", font=font(FONT_BOLD, 18), fill="#8eeee2")

    canvas.convert("RGB").save(ASSETS / "og-cloud-devops.png", optimize=True, quality=94)


def generate_icon(size: int, target: str) -> None:
    scale = size / 64
    canvas = Image.new("RGBA", (size, size), "#07111f")
    draw = ImageDraw.Draw(canvas)
    inset = max(1, int(size * 0.025))
    draw.rounded_rectangle(
        (inset, inset, size - inset - 1, size - inset - 1),
        radius=max(3, int(size * 0.26)),
        fill="#07111f",
        outline="#23445e",
        width=max(1, int(size * 0.025)),
    )
    draw_cloud(draw, (8 * scale, 8 * scale), 0.38 * scale, "#5eead4", max(1, int(3 * scale)))
    canvas.save(ASSETS / target, optimize=True)


def main() -> None:
    ASSETS.mkdir(parents=True, exist_ok=True)
    generate_open_graph()
    generate_icon(32, "favicon-32.png")
    generate_icon(180, "apple-touch-icon.png")
    print("Recursos sociales generados en assets/.")


if __name__ == "__main__":
    main()
