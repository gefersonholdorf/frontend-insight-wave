export function ProfileMenu() {
    return (
        <div className="flex items-center gap-3 w-full pb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
                <img
                    src="https://github.com/gefersonholdorf.png"
                    alt="Foto de perfil de Geferson Holdorf"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            <div className="flex flex-col justify-center">
                <span className="text-sm font-medium text-gray-800">Geferson Holdorf</span>
                <span className="text-xs text-gray-500">Desenvolvedor</span>
            </div>
        </div>
    );
}
